import { Component, OnInit, Input } from '@angular/core';
import { HorseClubService } from "../../../shared/horse-club-service.service"
import { CategoryConsistService } from 'src/app/shared/service/category-consist.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss', '../../../../assets/css/theme-blue.css']
})
export class CategoryCardComponent implements OnInit {

  @Input('category') category: any;
  services = [];

  constructor(private categoryConsustService: CategoryConsistService) { }

  ngOnInit(): void {
    console.log(this.category.id)
    this.categoryConsustService.query(this.category.id).subscribe( result => {
      this.services = result.body || [];
    })
  }
}
