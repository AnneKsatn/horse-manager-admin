import { ResidentService } from './../../../shared/resident.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


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

  horses: Observable<any[]>;

  procedures = [
    {
      "title": "Прививка от сибирской язвы",
      "date": "25.09.2019",
      "vet": "Сухожилова Н.А"
      }

  ]

  ngOnInit(): void {
    this.horses = this.residentService.getHorses();
  }
}
