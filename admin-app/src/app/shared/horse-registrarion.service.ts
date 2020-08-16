import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { IResident } from './model/resident.model';
import { SERVER_API_URL } from '../app.constants';

import * as moment from 'moment/moment';
import { HttpResponse, HttpClient } from '@angular/common/http';

type EntityResponseType = HttpResponse<IResident>;
type EntityArrayResponseType = HttpResponse<IResident[]>;


@Injectable({
  providedIn: 'root'
})
export class HorseRegistrarionService {

  club_id: number;
  public resourceUrl = SERVER_API_URL + 'api/residents';

  constructor(private firestore: AngularFirestore,
    private authService: AuthService,
    private http: HttpClient) {
    this.club_id = this.authService.getUserID();
  }

  getRequests() {
    console.log(this.club_id)
    return this.firestore.collection('joining_application', ref => ref.where('club_id', '==', this.club_id)
      .where('status', '==', "active")).snapshotChanges();
  }

  getHorseName(horse_id: string) {
    return this.firestore.collection('horses').doc(horse_id).get();
  }

  acceptRequest(request_id: string) {
    return this.firestore.collection('joining_application').doc(request_id).update({
      status: "accepted"
    })
  }

  createResident(resident: IResident) {
    console.log("create")
    const copy = this.convertDateFromClient(resident);
    console.log(copy);
    return this.http
      .post<IResident>(this.resourceUrl, resident, { observe: 'response' })
  }

  deleteHorse(horse_id: string) {

    let req_adress = 'residents/' + this.club_id + '/horses'
    this.firestore.collection(req_adress).doc(horse_id).delete();

    this.firestore.collection("horses").doc(horse_id).update({
      isResident: "false",
      club_id: ""
    })
  }

  rejectRequest(request_id: string) {
    return this.firestore.collection('joining_application').doc(request_id).delete();
  }

  protected convertDateFromClient(horse: IResident): IResident {
    const copy: IResident = Object.assign({}, horse, {
      date: horse.date && horse.date.isValid() ? horse.date.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.date = res.body.date ? moment(res.body.date) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((horse: IResident) => {
        horse.date = horse.date ? moment(horse.date) : undefined;
      });
    }
    return res;
  }
}
