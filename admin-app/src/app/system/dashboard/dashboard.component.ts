import { Component, OnInit } from '@angular/core';
import { HorseClubService } from "../../shared/horse-club-service.service"
import { CategoryService } from 'src/app/shared/service/category.service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IStandingCategogy, StandingCategogy } from 'src/app/shared/model/categogy.model';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private horseClubService: HorseClubService, private categotyService: CategoryService, public dialog: MatDialog) { }

  categories: IStandingCategogy[];

  loadData(){
    this.categotyService.query().subscribe( response => {
      this.categories = response.body || [];
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  addCategory(){
    
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '250px',
      data: { price: 25000, title: "I категория" }
    });

    dialogRef.afterClosed().subscribe(result => {
      const categogy = this.createCategory(3, result);
      this.subscribeToSaveResponse(this.categotyService.create(categogy))
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
