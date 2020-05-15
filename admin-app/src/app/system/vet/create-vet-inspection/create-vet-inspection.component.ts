import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ResidentService } from '../../../shared/resident.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vet-inspection',
  templateUrl: './create-vet-inspection.component.html',
  styleUrls: ['./create-vet-inspection.component.scss']
})
export class CreateVetInspectionComponent implements OnInit {

  constructor(private residentService: ResidentService, private router: Router) { }

  form: FormGroup;

  todo = [];
  done = [];
  paied = [];

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),

      date: new FormControl('', [
        Validators.required,
      ]),

      veterinar: new FormControl('', [
        Validators.required,
      ]),

      price: new FormControl('', [
        Validators.required,
      ])
    })

    this.residentService.getHorses();
    this.setHorses();
  };

  async setHorses(){
    this.done = await this.residentService.residents;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    console.log(this.todo)
  }

  onCreateInspection(){
    const title = this.form.value.title;
    const veterinar = this.form.value.veterinar;
    const price = this.form.value.price
    const date = this.form.value.date
    
    console.log("CREATE");

    let listOfProcedures = [];

    this.done.forEach( item => {
      listOfProcedures.push({
        horse_id: item.id,
        status: "notpaid"
      })
    })

    this.paied.forEach( item => {
      listOfProcedures.push({
        horse_id: item.id,
        status: "paid"
      })
    })

    this.todo.forEach( item => {
      listOfProcedures.push({
        horse_id: item.id,
        status: "missed"
      })
    })

    this.residentService.createInspection(title, veterinar, price, date, listOfProcedures)

    this.router.navigateByUrl("/system/vet/inspection")

  }
}
