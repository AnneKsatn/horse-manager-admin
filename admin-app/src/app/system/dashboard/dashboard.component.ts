import { Component, OnInit } from '@angular/core';
import { HorseClubService } from "../../shared/horse-club-service.service"
import { CategoryService } from 'src/app/shared/service/category/category.service';
// import { CreateCategoryComponent } from './create-category/create-category.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IStandingCategogy, StandingCategogy } from 'src/app/shared/model/categogy.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import axios from 'axios'
// import google from 'googleapis'
// import google from google.map
import { Loader } from "@googlemaps/js-api-loader"


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

  latitude: number = 59.95703125;
  longitude: number = 30.29086303710938;

  loader = new Loader({
    apiKey: "AIzaSyDcaXmX9DOD7ocoi8Jgci5pi-JNyHzFMPo"
  });

  loadData(){
    this.categotyService.query().subscribe( response => {
      this.categories = response.body || [];
    })
  }

  ngOnInit(): void {

    this.loadData();

    if(this.latitude && this.longitude) {
      this.loader.load().then(() => {
        let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: new google.maps.LatLng(this.latitude, this.longitude),
          zoom: 15,
        });

        new google.maps.Marker({
          position: new google.maps.LatLng(this.latitude, this.longitude),
          map: map
        })
      });
    }
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

    this.loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 15,
      });
      
      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map
      })
    });

    // let map = new google.maps.Map(document.getElementById("map"), {
    //   zoom: 15,
    //   center: new google.maps.LatLng(latitude, longitude),
    //   // mapTypeOs: google.maps.MapTypeId.ROADMAP
    // }) 

    // new google.maps.Marker({
    //   position: new google.maps.LatLng(latitude, longitude),
    //   map: map
    // })
  }

  locatorButtonPressed() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.getAddressFrom(position.coords.latitude, position.coords.longitude)
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
          this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude)
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
