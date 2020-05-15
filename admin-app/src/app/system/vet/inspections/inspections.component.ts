import { Component, OnInit } from '@angular/core';
import { ResidentService } from './../../../shared/resident.service';


@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  constructor(private residentService: ResidentService){}

  name: string;
  owner: string;
  horses: any;

  procedures = [];

  ngOnInit(): void {
    this.residentService.getVets().subscribe( data => {

      this.procedures = data.map(function(procedure: any) {
        return {
          date: procedure.payload.doc.data().date,
          price: procedure.payload.doc.data().price,
          title: procedure.payload.doc.data().title,
          vet: procedure.payload.doc.data().vet,
          id: procedure.payload.doc.id
        }
      })
      
      this.residentService.getHorses();

      // this.procedures.forEach(item => {
      //   item.done = [];

      //   this.residentService.getOkProcedureHorses(item.id).subscribe( (data: any) => {
      //     item.done.push(data.payload.doc.data().date)
      //   });
      // })

      // console.log(this.procedures);
    })
  }
}
