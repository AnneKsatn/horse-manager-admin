import { ResidentService } from './../../../shared/resident.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { unescapeIdentifier } from '@angular/compiler';
import { DeleteHorseDialogComponent } from './delete-horse-dialog/delete-horse-dialog.component';
import { Observable } from 'rxjs';
import { HorseRegistrarionService } from '../../../shared/horse-registrarion.service';


export interface Horse {
     name: string;
     owner: string;
     stable: string;
     groom: string;
     stall: string;
     people: Person[];
     category: string;
}
export interface Person {
  name: string;
  phone: string;
  role: string;
}

@Component({
  selector: 'app-resident-unit',
  templateUrl: './resident-unit.component.html',
  styleUrls: ['./resident-unit.component.scss']
})
export class ResidentUnitComponent implements OnInit {
  constructor(public dialog: MatDialog, 
    private residentService: ResidentService,
    private horseRegistrationService: HorseRegistrarionService,
    ) {
    this.residentService.getHorses();
  }

  name: string;
  owner: string;

  horses = [];

  ngDoCheck(): void{
    this.horses = this.residentService.residents;
  }

  ngOnInit(): void {
    this.horses = this.residentService.residents;
  }

  openDialog(horse_id: string): void {
    const dialogRef = this.dialog.open(DeleteHorseDialogComponent, {
      width: '450px',
      data: { name: this.name, owner: this.owner}
    })

    dialogRef.afterClosed().subscribe(result => {
      this.horseRegistrationService.deleteHorse(horse_id)
      // if (result !== undefined) {
      //   if (result.name !== undefined) {
      //     this.horses.push({
      //       name: result.name,
      //       owner: result.owner,
      //       phone: "+79215673724",
      //       stable: result.stable,
      //       groom: result.groom,
      //       stall: result.stall
      //     })
      //   }
      // }
    });
  }

  edit(id: string){
    console.log(id);
  }

  delete(id: string){
    console.log(id);
    this.openDialog(id);
  }

}
