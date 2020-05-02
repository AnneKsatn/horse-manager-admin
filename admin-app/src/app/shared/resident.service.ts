import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AngularFirestore} from '@angular/fire/firestore'
// import { AngularFireAuth} from '@angular/fire/auth'
// import * as firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { firestore } from 'firebase';

export interface Horse {
    id: number,
    name: string,
    owner: string,
    phone: string,
    stable: string,
    groom: string,
    stall: string,
}

@Injectable()
export class ResidentService{

  id_club = "DyIWkJTo7cCQK6CdFK95";

  residents = [];

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore){}

  getHorses(){
    let req_adress = 'residents/' + this.id_club + '/horses'

    this.firestore.collection(req_adress).snapshotChanges()
    .subscribe((horses: any) => {

      this.residents = horses.map(function(horse) {      
        return {
          "stable": horse.payload.doc.data().stable,
          "stall": horse.payload.doc.data().stall,
          "groom": horse.payload.doc.data().groom,
          "id": horse.payload.doc.id,
        }
      })

      this.getHorseInfo();
    });
  }

  getHorseInfo(){
    this.residents.forEach(horse => {
      this.firestore.collection('horses').doc(horse.id).get().subscribe( (doc: any) => {
        horse.name =  doc.data().name;
      })
    })
  }


  getPeopleById(id: string){
    return this.httpClient.get('http://192.168.1.39:3000/horses', {
      params: new HttpParams().set('id', id)
  });
  }
}
