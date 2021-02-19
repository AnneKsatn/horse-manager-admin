import { Component, OnInit } from '@angular/core';
// import { Horse } from '../dashboard/feeding-time/feeding-time.component';
import { HorseClubService } from '../../shared/horse-club-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTimeComponent } from './edit-time/edit-time.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public feedings;

  constructor(private horseClubService: HorseClubService, public dialog: MatDialog,) { }

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

}
