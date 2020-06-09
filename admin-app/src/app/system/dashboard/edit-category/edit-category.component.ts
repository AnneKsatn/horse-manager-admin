import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CategoryService } from 'src/app/shared/service/category.service';

import {CreateCategoryServiceComponent} from '../create-category-service/create-category-service.component'
import { CategoryConsistService } from 'src/app/shared/service/category-consist.service';
import { ICategoryService, CategoryServiceModel } from 'src/app/shared/model/category-service.model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute,  
    public dialog: MatDialog, 
    private categoryService: CategoryService,
     private categoryConsistService: CategoryConsistService,
     private router: Router
     ) { }

  category_id: string;
  services: ICategoryService[];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  loadData(){
    this.category_id = this.activatedRouter.snapshot.queryParams['id']
    this.categoryConsistService.query(parseInt(this.category_id)).subscribe( result => {
      this.services = result.body || [];
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  deleteService(id: number){
    this.subscribeToSaveResponse(this.categoryConsistService.delete(id))
  }

  addServiceInCategory(){
    const dialogRef = this.dialog.open(CreateCategoryServiceComponent, {
      width: '500px',
      data: { title: "Постой в большом денике" }
    });

    dialogRef.afterClosed().subscribe(result => {
      const service = this.createService(result.title);
      this.subscribeToSaveResponse(this.categoryConsistService.create(service))
    });
  }

  delete(){
    this.categoryService.delete(parseInt(this.category_id)).subscribe( result => {
      this.router.navigate(['/system/dashboard']);
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
