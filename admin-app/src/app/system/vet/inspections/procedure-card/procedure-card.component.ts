import { Component, OnInit, Input } from '@angular/core';
import { ResidentService } from '../../../../shared/resident.service';

@Component({
  selector: 'app-procedure-card',
  templateUrl: './procedure-card.component.html',
  styleUrls: ['./procedure-card.component.scss']
})
export class ProcedureCardComponent implements OnInit {

  @Input('procedure') procedure: any;

  constructor(private residentService: ResidentService) { }

  name: string;
  owner: string;
  horsesOk = [];
  horsesMissed = [];
  horsesVet = [];

  horseIDS = []
  ngOnInit(): void {

    this.residentService.getOkProcedureHorses(this.procedure.id).subscribe( data => {
      this.horsesOk = data.map(function(item: any) {
        let status;

        if (item.payload.doc.data().status == "paid") {
          status = "оплачено"
        } else {
          status = "не оплачено"
        }

        return {
          status: status,
          horse_id: item.payload.doc.data().horse_id,
          vet_procedure_id: item.payload.doc.id
        }
      })

      this.horsesOk.forEach(horse => {
        this.residentService.getHorseName(horse.horse_id).subscribe( data => {
          horse.name =  data.data().name;
        })
      })
    })

    this.residentService.getMissedProcedureHorses(this.procedure.id).subscribe( data => {
      this.horsesMissed = data.map(function(item: any) {
        return {
          status: item.payload.doc.data().status,
          horse_id: item.payload.doc.data().horse_id,
          vet_procedure_id: item.payload.doc.id
        }
      })

      this.horsesMissed.forEach(horse => {
        this.residentService.getHorseName(horse.horse_id).subscribe( data => {
          horse.name =  data.data().name;
        })
      })
    })
  }

  changeStatus(vet_procedure_id: string, status: string){
    this.residentService.changeVetVisionStatus(vet_procedure_id, status);
  }

  editInspectionInfo(){
    
  }

}
