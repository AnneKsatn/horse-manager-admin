import { Component, OnInit } from '@angular/core';
import { HorseClubService } from "../../shared/horse-club-service.service"
import { CategoryService } from 'src/app/shared/service/category/category.service';
// import { CreateCategoryComponent } from './create-category/create-category.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IStandingCategogy, StandingCategogy } from 'src/app/shared/model/categogy.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import axios from 'axios'
import google from 'google'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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

  showUserLocationOnTheMap(latitude, longitude) {
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: new google.maps.LatLng(latitude, longitude),
      mapTypeOs: google.maps.MapTypeId.ROADMAP
    }) 

    new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map
    })
  }

  locatorButtonPressed() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.getAddressFrom(position.coords.latitude, position.coords.longitude)
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
        }
      );
    } else {
      console.log("Your brouser does not support geolocation")
    }
  }

  getAddressFrom(lat, long) {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyDcaXmX9DOD7ocoi8Jgci5pi-JNyHzFMPo").then(response => {
      if(response.data.error_message) {
        console.log(response.data.error_message);
      } else {
        console.log(response.data.results[0].formatted_address)
      }
    })
  }
}
