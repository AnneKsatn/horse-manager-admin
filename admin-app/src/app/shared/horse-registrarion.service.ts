import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HorseRegistrarionService {

  id_club = "DyIWkJTo7cCQK6CdFK95";

  constructor(private firestore: AngularFirestore) { }

  getRequests(club_id: string) {

    club_id = "DyIWkJTo7cCQK6CdFK95";

    return this.firestore.collection('joining_application', ref => 
    ref.where('club_id', '==', club_id)
    .where('status', '==', "active")).snapshotChanges();
  }

  getHorseName(horse_id: string){
    return this.firestore.collection('horses').doc(horse_id).get();
  }

  acceptRequest(request: any){
    let req_adress = 'residents/' + this.id_club + '/horses'

    this.firestore.collection(req_adress).doc(request.horse_id).set({
      // сделать окно добавления лошади
    })

    this.firestore.collection("horses").doc(request.horse_id).update({
      isResident: "true",
      club_id: this.id_club
    })

    this.firestore.collection('joining_application').doc(request.id).update({
      status: "accepted"
    })
  }
}
