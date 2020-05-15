import { Component, OnInit } from '@angular/core';
import { ResidentService } from './../../../shared/resident.service';
import { VeterinaryService } from '../../../shared/veterinary.service';
import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  constructor(private residentService: ResidentService, private veterinaryService: VeterinaryService, private authService: AuthService){}

  name: string;
  owner: string;
  horses: any;

  procedures = [];

  ngOnInit(): void {

    this.veterinaryService.getVetInspections().subscribe( data => {

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
    })
  }
}
