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
   horses: Observable<any[]>;

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore){}

  getHorses(){
    return this.firestore.collection('horses').valueChanges();
  }

  getPeopleById(id: string){
    return this.httpClient.get('http://192.168.1.39:3000/horses', {
      params: new HttpParams().set('id', id)
  });
  }

}
