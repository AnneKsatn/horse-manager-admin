import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵɵelementEnd } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidentService } from '../../../shared/resident.service';
import { HorseClubService } from '../../../shared/horse-club-service.service';

@Component({
  selector: 'app-horse-profile',
  templateUrl: './horse-profile.component.html',
  styleUrls: ['./horse-profile.component.scss']
})
export class HorseProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private horseClubService: HorseClubService,
    private residentService: ResidentService) { }

  public horse_id;
  public feedings;

  ngOnInit(): void {
    this.horse_id = this.route.snapshot.queryParams['horse_id'];

    this.horseClubService.getFeedingTimes().subscribe((data: any)=> {
      this.feedings = data.map(function(item: any){
        return {
          hour: item.payload.doc.data().hour,
          minutes: item.payload.doc.data().minutes,
          title: "",
          id: item.payload.doc.id
        }
      })
      
      this.feedings.forEach(element => {
        element.horse_id = this.horse_id;
      });
    })
  }

}
