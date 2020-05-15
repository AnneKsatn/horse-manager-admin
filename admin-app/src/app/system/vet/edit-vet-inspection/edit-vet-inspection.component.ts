import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VeterinaryService } from '../../../shared/veterinary.service';

@Component({
  selector: 'app-edit-vet-inspection',
  templateUrl: './edit-vet-inspection.component.html',
  styleUrls: ['./edit-vet-inspection.component.scss']
})
export class EditVetInspectionComponent implements OnInit {

  inspection_id: string;
  form: FormGroup;
  inspection_info = {
    date: "",
    price: "",
    title: "",
    vet: ""
  };

  constructor(private route: ActivatedRoute, private veterinaryService: VeterinaryService, private router: Router) { }

  ngOnInit(): void {
    this.inspection_id = this.route.snapshot.queryParams['id'];

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

    this.veterinaryService.getVetInspectionInfo(this.inspection_id).subscribe(doc => {
      this.inspection_info = {
        date: doc.data().date,
        price: doc.data().price,
        title: doc.data().title,
        vet: doc.data().vet
      }

      this.form.value.title = doc.data().title;
      this.form.value.veterinar = doc.data().vet;
      this.form.value.price = doc.data().price;
      this.form.value.date = doc.data().date;

      console.log(this.inspection_info)
    })

  }

  onEditInspection(){
    const title = this.form.value.title;
    const veterinar = this.form.value.veterinar;
    const price = this.form.value.price
    const date = this.form.value.date
    console.log(this.form.value);

    this.veterinaryService.updateInspectionInfo(title, veterinar, price, date, this.inspection_id)
    this.router.navigateByUrl("/system/vet/inspection")
  }

  deleteInspection(inspection_id: string){
    this.veterinaryService.deleteInspection(inspection_id);
    this.router.navigateByUrl("/system/vet/inspection");
  }
}
