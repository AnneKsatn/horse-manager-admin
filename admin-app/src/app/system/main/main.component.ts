import { Component, OnInit } from '@angular/core';
import { HorseRegistrarionService } from '../../shared/horse-registrarion.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { JoinHorseDialogComponent } from './join-horse-dialog/join-horse-dialog.component';
import { Resident, IResident } from 'src/app/shared/model/resident.model';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export interface DialogData {
  stall: number;
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
    this.horseRegistarionService.getRequests().subscribe(requests => {
      console.log(requests)
      this.requestsToJoin = requests.map(function (request: any) {
        return {
          "horse_id": request.payload.doc.data().horse_id,
          "id": request.payload.doc.id,
          "horse_name": request.payload.doc.data().horse_name,
          "stable_id": request.payload.doc.data().club_id,
        }
      })
    })
  }

  openDialog(request: any): void {

    const dialogRef = this.dialog.open(JoinHorseDialogComponent, {
      width: '250px',
      data: { stall: 1 }
    });

    dialogRef.afterClosed().subscribe(result => {
      result.stable_id = request.stable_id
      result.horse_id = request.horse_id
      result.stall = parseInt(result.stall)
      result.category = parseInt(result.category)

      const resident = this.createFrom(result);

      this.horseRegistarionService.acceptRequest(request.request_id).then(() => {
        this.subscribeToSaveResponse(this.horseRegistarionService.createResident(resident))
      }
      )
    });
  }


  private createFrom(result: any): IResident {
    return {
      ...new Resident(),
      id: undefined,
      stableId: result.stable_id,
      date: moment().startOf('day'),
      horseId: result.horse_id,
      categoryId: result.categoryId,
      stall: result.stall
    };
  }


  protected subscribeToSaveResponse(result: Observable<HttpResponse<IResident>>): void {
    result.subscribe(
      (resp) => { console.log("OK") },
      (err) => { console.log(err) }
    );
  }

  rejectRequest(request) {
    this.horseRegistarionService.rejectRequest(request.id);
  }
}
