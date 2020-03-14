import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AngularFirestore} from '@angular/fire/firestore'
// import { AngularFireAuth} from '@angular/fire/auth'
// import * as firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

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
  horses = [];

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore){}

  getHorses(){
    this.firestore.collection('residents', ref => ref.where('id_club', '==', this.id_club)).valueChanges()
    .subscribe((data: any) => {
      this.residents = data.map(function(item) {
        return {
          "stable": item.stable,
          "stall": item.stall,
          "groom": item.groom,
          "id_horse": item.id_horse
        }
      })
    });
  }

  getPeopleById(id: string){
    return this.httpClient.get('http://192.168.1.39:3000/horses', {
      params: new HttpParams().set('id', id)
  });
  }

  getResidents(){
    this.horses  = this.residents.map(function(item){
      console.log(item);
      return this.firestore.collection('horses').doc(item.id_horse).get();
    })
  }
}
