import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface DialogData {
  name: string;
  owner: string;
}

@Component({
  selector: 'app-delete-horse-dialog',
  templateUrl: './delete-horse-dialog.component.html',
  styleUrls: ['./delete-horse-dialog.component.scss']
})
export class DeleteHorseDialogComponent implements OnInit {

  nameFormControl = new FormControl('', [Validators.required]);
  ownerFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<DeleteHorseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
