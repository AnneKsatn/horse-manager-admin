import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HorseClubService {

  club_id: number;

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
    this.club_id = this.authService.getUserID();
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
