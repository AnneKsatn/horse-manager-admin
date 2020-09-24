import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ResidentService } from '../../../shared/resident.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinaryService } from '../services/veterinary.service';
import { IStableVetInfo, StableVetInfo } from '../../../shared/model/stable-vet-info.model';

@Component({
  selector: 'app-create-vet-inspection',
  templateUrl: './create-vet-inspection.component.html',
  styleUrls: ['./create-vet-inspection.component.scss']
})
export class CreateVetInspectionComponent implements OnInit {

  constructor(private router: Router, private veterinaryService: VeterinaryService) { }

  form: FormGroup;

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
  };


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  private createInspection(stable_id: number): IStableVetInfo{

    return {
      ...new StableVetInfo(),
      id: undefined,
      title: this.form.value.title,
      stableId: stable_id,
      date: new Date(this.form.value.date),
      price: this.form.value.price,
    };
  }

  onCreateInspection(){

    const inspection= this.createInspection(3);
    this.veterinaryService.create(inspection).subscribe((error) => {
      console.log(error);
    });

    this.router.navigateByUrl("/system/vet/inspection")
  }
}
