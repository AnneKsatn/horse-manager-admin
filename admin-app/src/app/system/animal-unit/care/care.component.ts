
import { ResidentService } from './../../../shared/resident.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { unescapeIdentifier } from '@angular/compiler';



export interface Person {
  name: string;
  phone: string;
  role: string;
}

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.scss']
})
export class CareComponent implements OnInit {

  constructor(public dialog: MatDialog, private residentService: ResidentService) { }

  name: string;
  owner: string;

  services = [
    {"title": "Закапать капли в глаза",
    "horse": "Estetika",
    "perfomer": "Нурик М.В",
    "date": "-",
    "perodicity": "ежедневно",
    "time": "-",
    "period": "утро",
    "description": "Тобрекс - по капле в каждый клаз. Перерыв 15 - 30 минут. Флоксал в правый клаз. Перерыв 15 - 30 минут. Корнерегель в оба глаза. Лекарства лежат в холодильнике!"
  },

    {"title": "Перевязка ноги",
    "horse": "Вьенто",
    "perfomer": "Нурик М.В",
    "date": "-",
    "perodicity": "ежедневно",
    "time": "15:00",
    "period": "вечер",
    "description": "Перевязочные средства лежат в ящике с подписью 'ВЬЕНТО' "
  }
  ]
  horses: {
    id: string;
    name: string;
    owner: string;
    stable: string;
    groom: string;
    stall: string;
    people: Person[];
  };

  ngOnInit(): void {
     this.residentService.getHorses()
    //.subscribe(horses => {
    //   this.horses = horses;
    // })
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DeleteHorseDialogComponent, {
  //     width: '450px',
  //     data: { name: this.name, owner: this.owner}
  //   })

  //   dialogRef.afterClosed().subscribe(result => {
  //     // if (result !== undefined) {
  //     //   if (result.name !== undefined) {
  //     //     this.horses.push({
  //     //       name: result.name,
  //     //       owner: result.owner,
  //     //       phone: "+79215673724",
  //     //       stable: result.stable,
  //     //       groom: result.groom,
  //     //       stall: result.stall
  //     //     })
  //     //   }
  //     // }
  //   });
  // }

  // edit(id: string){
  //   console.log(id);
  // }

  // delete(id: string){
  //   console.log(id);
  //   this.openDialog();
  // }

}
