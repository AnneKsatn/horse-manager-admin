import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HorseClubService } from '../../../shared/horse-club-service.service';
import { CategoryService } from 'src/app/shared/service/category.service';
import { IStandingCategogy } from 'src/app/shared/model/categogy.model';

export interface DialogData {
  stall: number;
  category: string;
}


@Component({
  selector: 'app-join-horse-dialog',
  templateUrl: './join-horse-dialog.component.html',
  styleUrls: ['./join-horse-dialog.component.scss']
})
export class JoinHorseDialogComponent {


  selectFormControl = new FormControl('', Validators.required);
  categories: IStandingCategogy[];

  constructor(
    public dialogRef: MatDialogRef<JoinHorseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private categoryService: CategoryService) {
      
      this.categoryService.query().subscribe( response => {
        this.categories = response.body || [];
      })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
