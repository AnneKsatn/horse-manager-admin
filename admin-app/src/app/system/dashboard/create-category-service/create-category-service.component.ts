import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HorseClubService } from '../../../shared/horse-club-service.service';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-create-category-service',
  templateUrl: './create-category-service.component.html',
  styleUrls: ['./create-category-service.component.scss']
})
export class CreateCategoryServiceComponent  {

  selectFormControl = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<CreateCategoryServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
