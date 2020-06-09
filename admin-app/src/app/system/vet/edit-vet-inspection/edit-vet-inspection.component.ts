import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VeterinaryService } from '../../../shared/veterinary.service';
import { IStableVetInfo, StableVetInfo } from '../../../shared/model/stable-vet-info.model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-vet-inspection',
  templateUrl: './edit-vet-inspection.component.html',
  styleUrls: ['./edit-vet-inspection.component.scss']
})
export class EditVetInspectionComponent implements OnInit {

  inspection_id: string;
  form: FormGroup;
  inspection_info: IStableVetInfo;

  constructor(private route: ActivatedRoute, private veterinaryService: VeterinaryService, private router: Router) { }

  ngOnInit(): void {
    this.inspection_id = this.route.snapshot.queryParams['id'];

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })

    this.veterinaryService.find(this.inspection_id).subscribe((data: HttpResponse<IStableVetInfo>) => (
      this.inspection_info = data.body || {}
    ))
  }

  onEditInspection(){
    const title = this.form.value.title;
    const price = this.form.value.price
    const date = this.form.value.date
    console.log(this.form.value);

    const stableVetInfo = this.createFromForm();

    this.subscribeToSaveResponse(this.veterinaryService.update(stableVetInfo));

    // this.veterinaryService.updateInspectionInfo(title, veterinar, price, date, this.inspection_id)
    this.router.navigateByUrl("/system/vet/inspection")
  }

  delete(inspection_id: string){
    this.veterinaryService.delete(parseInt(inspection_id)).subscribe(() => {
      // this.eventManager.broadcast('stableVetInfoListModification');
      // this.activeModal.close();
      this.router.navigateByUrl("/system/vet/inspection");
    });
  }

  private createFromForm(): IStableVetInfo {
    return {
      ...new StableVetInfo(),
      id: parseInt(this.inspection_id),
      stableId: this.inspection_info.stableId,
      date: this.form.value.date,
      title: this.form.value.title,
      price:  this.form.value.price,
    };
  }

  
  protected subscribeToSaveResponse(result: Observable<HttpResponse<IStableVetInfo>>): void {
    result.subscribe(
      () => {
        console.log("OK")
      },
      () => {
        console.log("NO")
      }
    );
  }

  // protected onSaveSuccess(): void {
  //   this.isSaving = false;
  //   this.previousState();
  // }

  // protected onSaveError(): void {
  //   this.isSaving = false;
  // }

}
