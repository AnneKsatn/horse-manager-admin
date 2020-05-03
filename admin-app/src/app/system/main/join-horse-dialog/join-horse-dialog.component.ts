import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HorseClubService } from '../../../shared/horse-club-service.service';

export interface DialogData {
  groom: string;
  stable: string;
  stall: string;
  category: string;
}

interface Animal {
  name: string;
  sound: string;
}


@Component({
  selector: 'app-join-horse-dialog',
  templateUrl: './join-horse-dialog.component.html',
  styleUrls: ['./join-horse-dialog.component.scss']
})
export class JoinHorseDialogComponent {

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  categories = [];

  constructor(
    public dialogRef: MatDialogRef<JoinHorseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private horseClubService: HorseClubService) {
      this.horseClubService.getCategories().subscribe((categories: any) => {
        this.categories = categories.map(category => {
          return {
            title: category.payload.doc.data().title
          }
        })
      })
    }


  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
