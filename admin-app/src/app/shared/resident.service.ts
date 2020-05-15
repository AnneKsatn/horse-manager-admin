import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AngularFirestore} from '@angular/fire/firestore'
// import { AngularFireAuth} from '@angular/fire/auth'
// import * as firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { AuthService } from '../auth/auth.service';
import { take } from 'rxjs/operators';


export interface Horse {
  id: number,
  name: string,
  owner: string,
  phone: string,
  stable: string,
  groom: string,
  stall: string,
  category: string
}

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  id_club: string;

  residents = [];

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore, private authService: AuthService) {
    this.authService.userId.pipe(take(1)).subscribe( (userID: string) =>{
      this.id_club = userID;
    })
   }

  getHorses() {
    let req_adress = 'residents/' + this.id_club + '/horses'

    this.firestore.collection(req_adress).snapshotChanges()
      .subscribe((horses: any) => {

        this.residents = horses.map(function (horse) {
          return {
            "stable": horse.payload.doc.data().stable,
            "stall": horse.payload.doc.data().stall,
            "groom": horse.payload.doc.data().groom,
            "id": horse.payload.doc.id,
            "category": horse.payload.doc.data().category,
            "owner": horse.payload.doc.data().owner
          }
        })

        this.getHorseInfo();
        this.getCategoryInfo();
      });
  }

  getHorseInfo() {
    this.residents.forEach(horse => {
      this.firestore.collection('horses').doc(horse.id).get().subscribe((doc: any) => {
        horse.name = doc.data().name;
      })
    })
  }

  getHorseName(horse_id: string){
    return this.firestore.collection('horses').doc(horse_id).get();
  }

  getCategoryInfo() {
    this.residents.forEach(horse => {

      let req_adress = '/horse_clubs/' + this.id_club + '/categories';
      this.firestore.collection(req_adress).doc(horse.category).get().subscribe((doc: any) => {
        horse.category = doc.data().title;
      })
    })
}


  getPeopleById(id: string) {
    return this.httpClient.get('http://192.168.1.39:3000/horses', {
      params: new HttpParams().set('id', id)
    });
  }

  getHorseFeeding(horse_id: string, feeding_id: string){

    let request = "/feeding/" + feeding_id + "/horses/" + horse_id + "/consist"
    return this.firestore.collection(request).valueChanges();

  }


  getVets(){
    return this.firestore.collection("/vet_procedure_info", ref => ref.where('club_id', '==',this.id_club)).snapshotChanges();
  }

  getOkProcedureHorses(procedure_id: string){
    return this.firestore.collection("/vets", ref => ref.where('vet_id', '==', procedure_id).where('status', 'in', ['paid', 'notpaid'])).snapshotChanges();
  }

  getMissedProcedureHorses(procedure_id: string){
    return this.firestore.collection("/vets", ref => ref.where('vet_id', '==', procedure_id).where('status', '==', "missed")).snapshotChanges();
  }

  changeVetVisionStatus(id_vision: string, status: string){

    this.firestore.collection("vets").doc(id_vision).update({
      status: status,
    })
  }

  fillInspectionConsist(procedutreConsist: any, procedure_id: string){
    console.log(procedutreConsist);
    this.firestore.collection("vet_procedure_consist").doc(procedure_id)
    .set(procedutreConsist);
  }

  
  fillInspectionConsist_2(procedutreConsist: Array<any>, procedure_id: string) {
    console.log(procedutreConsist);

    // this.firestore.collection("vet_procedure_consist").doc(procedure_id)
    //   .set(procedutreConsist);
    let batch = this.firestore.firestore.batch();

    procedutreConsist.forEach( procedure => {
      procedure.vet_id = procedure_id;
      let nycRef = this.firestore.firestore.collection('vets').doc();
      batch.set(nycRef, procedure)
    })

    return batch.commit().then(function () {
      console.log("done");
    });
  }

}
