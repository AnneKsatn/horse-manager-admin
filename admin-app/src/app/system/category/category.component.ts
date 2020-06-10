import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { IStandingCategogy } from 'src/app/shared/model/categogy.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss', '../../../assets/css/theme-blue.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories: IStandingCategogy[];

  ngOnInit(): void {
    this.categoryService.query().subscribe( result => {
      this.categories = result.body || [];
    })
  }
}
