import { Component, OnInit, Input } from '@angular/core';
import { ResidentService } from '../../../../shared/resident.service';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent implements OnInit {

  @Input('feeding') feeding: any;

  public consist;

  constructor(private residentService: ResidentService) { }

  ngOnInit(): void {
    this.residentService.getHorseFeeding(this.feeding.horse_id, this.feeding.id).subscribe( data => {
      this.consist = data;
    })
  }

}
