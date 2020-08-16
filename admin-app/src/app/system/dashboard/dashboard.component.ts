import { Component, OnInit } from '@angular/core';
import { HorseClubService } from "../../shared/horse-club-service.service"
import { CategoryService } from 'src/app/shared/service/category.service';
// import { CreateCategoryComponent } from './create-category/create-category.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IStandingCategogy, StandingCategogy } from 'src/app/shared/model/categogy.model';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../../assets/css/theme-blue.css']
})
export class DashboardComponent implements OnInit {

  constructor(private horseClubService: HorseClubService, private categotyService: CategoryService, public dialog: MatDialog, 
    public authService: AuthService,
    private router: Router) { }

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


  logout() {
    this.authService.logout().subscribe(null, null, () => {
      this.router.navigateByUrl('/auth/login');
    }
    );
  }
}
