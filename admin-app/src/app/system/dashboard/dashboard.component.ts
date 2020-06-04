import { Component, OnInit } from '@angular/core';
import { HorseClubService } from "../../shared/horse-club-service.service"
import { CategoryCardComponent } from './category-card/category-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private horseClubService: HorseClubService) { }

  categories = []

  ngOnInit(): void {
    this.horseClubService.getCategories().subscribe( data => {
      this.categories = data.map((category: any) => {
        return {
          title: category.payload.doc.data().title,
          id: category.payload.doc.id
        }
      })
      })
  }

  addCategory(){
    
  }

}
