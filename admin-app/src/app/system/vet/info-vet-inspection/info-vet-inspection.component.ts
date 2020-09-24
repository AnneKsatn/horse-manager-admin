import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ResidentService } from '../../../shared/resident.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { VeterinaryService } from '../../../shared/veterinary.service';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { IStableVetInfo } from '../../../shared/model/stable-vet-info.model';
import { IStableVet, StableVet } from '../../../shared/model/stable-vet.model';
import { VetParticipantsService } from '../../../shared/service/vet-participants.service';


export interface HorseProcedure {
  horseName: string,
  status: string;
  payment: string;
  procedure_id: string;
  color: string;
  checked: boolean;
}


@Component({
  selector: 'app-info-vet-inspection',
  templateUrl: './info-vet-inspection.component.html',
  styleUrls: ['./info-vet-inspection.component.scss']
})
export class InfoVetInspectionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'progress','color'];
  dataSource: MatTableDataSource<HorseProcedure>;

  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute, 
    private veterinaryService: VeterinaryService,
    private vetParticipantsService: VetParticipantsService
    ) { }

  inspection_id: string;

  inspection_info: IStableVetInfo;
  horseProcedures = [];

  getDataFromDB(): void {
    this.veterinaryService.find(this.inspection_id).subscribe((data: HttpResponse<IStableVetInfo>) => (
      this.inspection_info = data.body || {}
    ))

    this.vetParticipantsService.get(this.inspection_id).subscribe((data: HttpResponse<IStableVet[]>) => {
      console.log(data.body)
      this.horseProcedures = data.body || []

      this.horseProcedures.forEach((data: IStableVet )=> {
        if(data.status == "PAID") {
          data.checked = true;
        }
        else  {
          data.checked = false;
        }
      })
    })
  }

  ngOnInit(): void {
    this.inspection_id = this.route.snapshot.queryParams['id'];
    this.getDataFromDB();
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeStatus(stableVet: StableVet){

    let updatedRow = stableVet;
    updatedRow.status = (stableVet.status == "MISSED" ? "NOTPAID" : "MISSED")

    this.vetParticipantsService.update(updatedRow).subscribe(data => {
      this.getDataFromDB();
    })
  }

  changePayment(stableVet: StableVet){

    let updatedRow = stableVet;
    updatedRow.status = (stableVet.status == "NOTPAID" ? "PAID" : "NOTPAID");

    this.vetParticipantsService.update(updatedRow).subscribe(data => {
      this.vetParticipantsService.get(this.inspection_id).subscribe((data: HttpResponse<IStableVet[]>) => {
        this.getDataFromDB();
      })
    })
  }
}

