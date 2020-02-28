import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { unescapeIdentifier } from '@angular/compiler';
import { AddHorseDialogComponent } from './add-horse-dialog/add-horse-dialog.component';

@Component({
  selector: 'app-resident-unit',
  templateUrl: './resident-unit.component.html',
  styleUrls: ['./resident-unit.component.scss']
})
export class ResidentUnitComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  name: string;
  owner: string;
  stable: string;
  groom: string;
  roughrider: string;

  horses = [{
    name: 'Estetika',
    owner: "Касаткина Анна Сергеевна",
    phone: "+79215673724",
    stable: "13",
    groom: "Нурик М.В.",
    roughrider: "Алиса К.Д"
  }]

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddHorseDialogComponent, {
      width: '450px',
      data: { name: this.name, owner: this.owner, stable: this.stable, groom: this.groom, roughrider: this.roughrider }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.name !== undefined) {
          this.horses.push({
            name: result.name,
            owner: result.owner,
            phone: "+79215673724",
            stable: result.stable,
            groom: result.groom,
            roughrider: result.roughrider
          })
        }
      }
    });
  }

}
