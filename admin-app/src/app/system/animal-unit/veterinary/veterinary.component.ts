import { ResidentService } from './../../../shared/resident.service';
import { Component, OnInit } from '@angular/core';


export interface Person {
  name: string;
  phone: string;
  role: string;
}


@Component({
  selector: 'app-veterinary',
  templateUrl: './veterinary.component.html',
  styleUrls: ['./veterinary.component.scss']
})
export class VeterinaryComponent implements OnInit {

  constructor(private residentService: ResidentService){}

  name: string;
  owner: string;

  horses: {
    id: string;
    name: string;
    owner: string;
    stable: string;
    groom: string;
    stall: string;
    people: Person[];
  };

  procedures = [
    {
      "title": "Прививка от сибирской язвы",
      "date": "25.09.2019",
      "vet": "Сухожилова Н.А"
      }

  ]

  ngOnInit(): void {
    this.residentService.getHorses().subscribe(horses => {
      this.horses = horses;
    })
  }
}
