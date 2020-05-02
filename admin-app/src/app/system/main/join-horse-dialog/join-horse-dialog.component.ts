import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  goom: string;
  stable: string;
  stall: string;
}

@Component({
  selector: 'app-join-horse-dialog',
  templateUrl: './join-horse-dialog.component.html',
  styleUrls: ['./join-horse-dialog.component.scss']
})
export class JoinHorseDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<JoinHorseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
