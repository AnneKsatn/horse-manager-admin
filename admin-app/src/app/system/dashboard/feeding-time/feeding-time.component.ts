import { Component, OnInit } from '@angular/core';
import { HorseClubService } from "../../../shared/horse-club-service.service"



import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTimeComponent } from './edit-time/edit-time.component';

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
  selector: 'app-feeding-time',
  templateUrl: './feeding-time.component.html',
  styleUrls: ['./feeding-time.component.scss']
})
export class FeedingTimeComponent implements OnInit {

  public feedings;

  constructor(public dialog: MatDialog,
    private horseClubService: HorseClubService) { }

  ngOnInit(): void {
    this.horseClubService.getFeedingTimes().subscribe((data: any) => {
      this.feedings = data.map(function (item: any) {
        return {
          hour: item.payload.doc.data().hour,
          minutes: item.payload.doc.data().minutes,
          title: "",
          id: item.payload.doc.id
        }
      })

      console.log(this.feedings)
    })
  }

  deleteFeeding(feeding_id: string) {
    this.horseClubService.deleteFeeding(feeding_id);
  }

  editFeeding(feeding_id: string) {
    console.log("edit");
  }

  openEditDialog(feeding_id: string, hour: number, minutes: string): void {
    const dialogRef = this.dialog.open(EditTimeComponent, {
      width: '450px',
      data: { hour: hour, minutes: minutes, title: "Редактировать время" }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.horseClubService.editFeedingTime(feeding_id, Number(result.hour), result.minutes);
      }
    });
  }

  openCreateDialog(): void {

    const dialogRef = this.dialog.open(EditTimeComponent, {
      width: '450px',
      data: { hour: 11, minutes: "00", title: "Добавить кормление" }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.horseClubService.createFeeding(Number(result.hour), result.minutes);
      }
    });
  }

  // delete(id: string){
  //   console.log(id);
  //   this.openDialog(id);
  // }

}
