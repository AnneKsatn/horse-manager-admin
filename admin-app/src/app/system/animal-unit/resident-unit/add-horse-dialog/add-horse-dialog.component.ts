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
  stable: string;
  groom: string;
  roughrider: string;
}

@Component({
  selector: 'app-add-horse-dialog',
  templateUrl: './add-horse-dialog.component.html',
  styleUrls: ['./add-horse-dialog.component.scss']
})
export class AddHorseDialogComponent implements OnInit {

  nameFormControl = new FormControl('', [Validators.required]);
  ownerFormControl = new FormControl('', [Validators.required]);
  stableFormControl = new FormControl('');
  groomFormControl = new FormControl('');
  roughriderFormControl = new FormControl('');

  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<AddHorseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
