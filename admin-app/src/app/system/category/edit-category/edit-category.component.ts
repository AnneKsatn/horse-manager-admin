import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CategoryService } from 'src/app/shared/service/category/category.service';

import { CreateCategoryServiceComponent } from '../create-category-service/create-category-service.component'
import { CategoryConsistService } from 'src/app/shared/service/category/category-consist.service';
import { ICategoryService, CategoryServiceModel } from 'src/app/shared/model/category-service.model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStandingCategogy, StandingCategogy } from 'src/app/shared/model/categogy.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss', '../../../../assets/css/theme-blue.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute,
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private categoryConsistService: CategoryConsistService,
    private router: Router
  ) { }

  category: IStandingCategogy | null = null;;
  category_id: string;
  services: ICategoryService[];

  title = "I категория"
  price = 20000;

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  loadData() {
    this.category_id = this.activatedRouter.snapshot.queryParams['id']
    this.categoryConsistService.query(parseInt(this.category_id)).subscribe(result => {
      this.services = result.body || [];
    })

    this.categoryService.find(parseInt(this.category_id)).subscribe(category => {
      this.category = category.body;
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  deleteService(id: number) {
    this.subscribeToSaveResponse(this.categoryConsistService.delete(id))
  }

  updateCategory() {
    const category = this.createCategory();

    this.categoryService.update(category).subscribe(
      (resp) => {
        this.router.navigateByUrl("/system/category")
      },
      (err) => { console.log(err) }
    );
  }

  private createCategory(): IStandingCategogy {
    return {
      ...new StandingCategogy(),
      id: parseInt(this.category_id),
      title: this.category.title,
      price: this.category.price,
      stableId: this.category.stableId
    };
  }

  addServiceInCategory() {
    const dialogRef = this.dialog.open(CreateCategoryServiceComponent, {
      width: '500px',
      data: { title: "Постой в большом денике" }
    });

    dialogRef.afterClosed().subscribe(result => {
      const service = this.createService(result.title);
      this.subscribeToSaveResponse(this.categoryConsistService.create(service))
    });
  }

  delete() {
    this.categoryService.delete(parseInt(this.category_id)).subscribe(result => {
      this.router.navigateByUrl("/system/category");
    })
  }

  private createService(title: string): ICategoryService {
    return {
      ...new CategoryServiceModel(),
      id: undefined,
      categoryId: parseInt(this.category_id),
      title: title
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategoryService>>): void {
    result.subscribe(
      (resp) => {
        console.log("OK");
        this.loadData();
      },
      (err) => { console.log(err) }
    );
  }
}
