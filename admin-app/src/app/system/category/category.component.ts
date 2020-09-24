import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category/category.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CreateCategoryComponent } from './create-category/create-category.component';
import { IStandingCategogy, StandingCategogy } from 'src/app/shared/model/categogy.model';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss', '../../../assets/css/theme-blue.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  categories: IStandingCategogy[];
  category: IStandingCategogy


  loadData() {
    this.categoryService.query().subscribe(result => {
      this.categories = result.body || [];
      this.category = this.categories[0] || {};
      console.log(this.category)
    })
  }

  ngOnInit(): void {
    this.loadData()
  }


  openDialog(): void {

    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '250px',
      data: { price: 25000, title: "I категория" }
    });

    dialogRef.afterClosed().subscribe(result => {
      const categogy = this.createCategory(3, result);
      this.subscribeToSaveResponse(this.categoryService.create(categogy))
    });
  }


  private createCategory(stable_id: number, result: any): IStandingCategogy {
    return {
      ...new StandingCategogy(),
      id: undefined,
      stableId: stable_id,
      price: parseInt(result.price),
      title: result.title
    };
  }


  protected subscribeToSaveResponse(result: Observable<HttpResponse<IStandingCategogy>>): void {
    result.subscribe(
      (resp) => {
        console.log("OK");
        this.loadData();
      },
      (err) => { console.log(err) }
    );
  }
}
