import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HorseClubService {

  club_id: string

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
    this.authService.userId.subscribe( (userID: string) =>{
      this.club_id = userID;
    })
   }

  /********************/
  /* Категории постоя */
  /********************/

  getCategories(){
    let request = "horse_clubs/" + this.club_id + "/categories"
    return this.firestore.collection(request).snapshotChanges();
  }

  getCategoryServices(category_id){
    let request = "services-in-category/" + category_id + "/services"
    return this.firestore.collection(request).snapshotChanges();
  }

  createCategory(price: string, title: string){
    
    let request = "horse_clubs/" + this.club_id + "/categories";
    this.firestore.collection(request).add({
      price: price,
      title: title
    })
  }


  /*****************************/
  /* Кормление грубыми кормами */
  /*****************************/

  getFeedingTimes(){
    let request = "horse_clubs/" + this.club_id + "/feedings";
    return this.firestore.collection(request, res => res.orderBy("hour")).snapshotChanges();
  }

  editFeedingTime(feeding_id: string, hour: number, minutes: string){

    let request = "horse_clubs/" + this.club_id + "/feedings";
    this.firestore.collection(request).doc(feeding_id).set({
      hour: hour,
      minutes: minutes
    })
  }

  createFeeding(hour: number, minutes: string){

    let request = "horse_clubs/" + this.club_id + "/feedings";
    this.firestore.collection(request).add({
      hour: hour,
      minutes: minutes
    })
  }

  deleteFeeding(feeding_id){
    let request = "horse_clubs/" + this.club_id + "/feedings";

    this.firestore.collection(request).doc(feeding_id).delete();
  }
}
