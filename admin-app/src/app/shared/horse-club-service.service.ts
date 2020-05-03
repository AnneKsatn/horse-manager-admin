import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HorseClubService {

  club_id = "DyIWkJTo7cCQK6CdFK95";

  constructor(private firestore: AngularFirestore) { }

  getCategories(){
    let request = "horse_clubs/" + this.club_id + "/categories"
    return this.firestore.collection(request).snapshotChanges();
  }

  getCategoryServices(category_id){
    let request = "services-in-category/" + category_id + "/services"
    return this.firestore.collection(request).snapshotChanges();
  }
}
