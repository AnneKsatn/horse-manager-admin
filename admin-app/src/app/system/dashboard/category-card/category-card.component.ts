import { Component, OnInit, Input } from '@angular/core';
import { HorseClubService } from "../../../shared/horse-club-service.service"

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input('category') category: any;
  services = [];

  constructor(private horseClubService: HorseClubService) { }

  ngOnInit(): void {
    console.log(this.category.id)
    this.horseClubService.getCategoryServices(this.category.id).subscribe( services => {
      this.services = services.map((service: any) => {
        return {
          title: service.payload.doc.data().title
        }
      })
    })

  }


}
