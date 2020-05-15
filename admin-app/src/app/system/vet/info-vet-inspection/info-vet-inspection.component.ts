import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ResidentService } from '../../../shared/resident.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { VeterinaryService } from '../../../shared/veterinary.service';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface InspectionInfo {
  date: string,
  price: string;
  title: string;
  vet: string;
}

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

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute, 
    private residentService: ResidentService, 
    private veterinaryService: VeterinaryService) { }

  inspection_id: string;

  inspection_info = {
    date: "",
    price: "",
    title: "",
    vet: ""
  };

  horseProcedures = [];

  ngOnInit(): void {

    this.inspection_id = this.route.snapshot.queryParams['id'];

    this.veterinaryService.getVetInspectionInfo(this.inspection_id).subscribe(doc => {
      this.inspection_info = {
        date: doc.data().date,
        price: doc.data().price,
        title: doc.data().title,
        vet: doc.data().vet
      }
    })

    this.veterinaryService.getInspectionHorses(this.inspection_id).subscribe(docs => {
      this.horseProcedures = docs.map(function (doc: any) {
        return {
          status: doc.payload.doc.data().status,
          horse_id: doc.payload.doc.data().horse_id,
          procedure_id: doc.payload.doc.id,
        }
      })

      this.horseProcedures.forEach(horseProcedure => {
        this.residentService.getHorseName(horseProcedure.horse_id).subscribe(data => {
          horseProcedure.name = data.data().name;
        })

        if (horseProcedure.status == "missed") {
          horseProcedure.payment = "не требуется"
          horseProcedure.color = "gray"
          horseProcedure.checked = false;
        }

        if (horseProcedure.status == "paid") {
          horseProcedure.payment = "ОК"
          horseProcedure.color = "green"
          horseProcedure.checked = true;
        }

        if (horseProcedure.status == "notpaid") {
          horseProcedure.payment = "не внесена"
          horseProcedure.color = "red"
          horseProcedure.checked = false;
        }

      })

      this.dataSource = new MatTableDataSource(this.horseProcedures);
      this.dataSource.sort = this.sort;
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeStatus(procedure_id: string, status: string){
    let new_status = (status == "missed" ? "notpaid" : "missed");
    this.veterinaryService.changeVetProcedureStatus(procedure_id, new_status);
  }

  changePayment(procedure_id: string, status: string){
    let new_status = (status == "notpaid" ? "paid" : "notpaid");
    this.veterinaryService.changeVetProcedureStatus(procedure_id, new_status);
  }
}

