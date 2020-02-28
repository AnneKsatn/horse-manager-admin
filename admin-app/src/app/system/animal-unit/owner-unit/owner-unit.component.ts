import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { unescapeIdentifier } from '@angular/compiler';
import { AddOwnerDialogComponent } from './add-owner-dialog/add-owner-dialog.component';

@Component({
  selector: 'app-owner-unit',
  templateUrl: './owner-unit.component.html',
  styleUrls: ['./owner-unit.component.scss']
})
export class OwnerUnitComponent implements OnInit {


  owners = [{
    name: 'Касаткина Анна Сергеевна',
    phone: "+79215673724",
    surname: "Нурик М.В.",
    patronymic: "Алиса К.Д"
  }]

  name: string;
  phone: string;
  surname: string;
  patronymic: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddOwnerDialogComponent, {
      width: '450px',
      data: {name: this.name, phone: this.phone, surname: this.surname, patronymic: this.patronymic}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
       if (result.name !== undefined) {
          this.owners.push({
          name: result.name,
          phone: result.phone,
          surname: result.surname,
          patronymic: result.patronymic
           })
         }
       }
    });
  }


}
