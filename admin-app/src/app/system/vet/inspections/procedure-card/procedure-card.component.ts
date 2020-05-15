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

  ngOnInit(): void {


  }

}
