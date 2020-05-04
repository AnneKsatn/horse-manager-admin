import { Component, OnInit } from '@angular/core';
import { HorseRegistrarionService } from '../../shared/horse-registrarion.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { JoinHorseDialogComponent } from './join-horse-dialog/join-horse-dialog.component';

export interface DialogData {
  groom: string;
  stable: string;
  stall: string;
  category: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private horseRegistarionService: HorseRegistrarionService,
    public dialog: MatDialog) { }

  requestsToJoin = [];

  ngOnInit(): void {
    this.horseRegistarionService.getRequests("adw").subscribe(requests => {
      this.requestsToJoin = requests.map(function (request: any) {
        return {
          "horse_id": request.payload.doc.data().horse_id,
          "id": request.payload.doc.id,
        }
      })

      this.requestsToJoin.forEach(request => {
        console.log("request");
        console.log(request.horse_id)
        this.horseRegistarionService.getHorseName(request.horse_id).subscribe(
          (horse: any) => {
            request.horse_name = horse.data().name
          })
      })
    })
  }

  openDialog(horse_id: string, request_id: string): void {
    console.log(horse_id)
    const dialogRef = this.dialog.open(JoinHorseDialogComponent, {
      width: '250px',
      data: { groom: "", stable: "", stall: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.horse_id = horse_id
      result.request_id = request_id
      this.horseRegistarionService.acceptRequest(result);
    });
  }

}
