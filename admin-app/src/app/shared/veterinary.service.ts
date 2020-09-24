import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { take, switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IStableVetInfo, StableVetInfo } from './model/stable-vet-info.model';
import * as moment from 'moment/moment';
import { SERVER_API_URL } from '../app.constants';


type EntityResponseType = HttpResponse<IStableVetInfo>;
type EntityArrayResponseType = HttpResponse<IStableVetInfo[]>;

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  constructor(private firestore: AngularFirestore, private authService: AuthService, protected http: HttpClient) {

  }

  public resourceUrl = SERVER_API_URL + 'api/stable-vet-infos';

  getVetInspections() {

    // return this.authService.userId.pipe(take(1), switchMap(userID => {
    //   return this.firestore.collection("/vet_procedure_info", ref => ref.where('club_id', '==', userID)).snapshotChanges();
    // }))
  }

  get(req?: any): Observable<EntityArrayResponseType> {
    return this.http
      .get<IStableVetInfo[]>(this.resourceUrl, {observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http
      .get<IStableVetInfo>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(stableVetInfo: IStableVetInfo): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(stableVetInfo);

    console.log(copy)
    return this.http
      .put<IStableVetInfo>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }


  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }


  getVetInspectionInfo(inspection_id) {
    return this.firestore.collection("/vet_procedure_info").doc(inspection_id).get();
  }

  getInspectionHorses(procedure_id: string) {
    return this.firestore.collection("/vets", ref => ref.where('vet_id', '==', procedure_id)).snapshotChanges();
  }

  changeVetProcedureStatus(id_vision: string, status: string) {
    console.log(id_vision)
    console.log(status)

    this.firestore.collection("vets").doc(id_vision).update({
      status: status,
    })
  }

  addInspectionParticipants(horseProcedures: Array<any>, inspection_id: string) {

    let batch = this.firestore.firestore.batch();

    horseProcedures.forEach(procedure => {
      procedure.vet_id = inspection_id;
      let nycRef = this.firestore.firestore.collection('vets').doc();
      batch.set(nycRef, procedure)
    })

    return batch.commit().then(function () {
      console.log("done");
    });
  }


  create(vet: IStableVetInfo): Observable<EntityResponseType> {

    const copy = this.convertDateFromClient(vet);

    return this.http
      .post<IStableVetInfo>(this.resourceUrl, copy, { observe: 'response' })
  }


  createInspection(title: string,
    veterinar: string,
    price: string,
    date: string,
    horseProcedures: any
  ) {

    // console.log("CREATE")
    // var func = this.addInspectionParticipants.bind(this);

    // this.authService.userId.subscribe(userID => {

    //   console.log(userID)

    //   this.firestore.collection("vet_procedure_info").add({
    //     title: title,
    //     vet: veterinar,
    //     price: price,
    //     date: date,
    //     club_id: userID
    //   })
    //     .then(function (docRef) {
    //       func(horseProcedures, docRef.id);
    //     })
    // })
  }

  updateInspectionInfo(title: string, veterinar: string, price: string, date: string, id: string) {
    console.log(id);
    console.log(price);
    this.firestore.collection('vet_procedure_info').doc(id).update({
      title: title,
      vet: veterinar,
      price: price,
      date: date
    })
  }

  deleteInspection(inspection_id) {
    this.firestore.collection('vet_procedure_info').doc(inspection_id).delete();
  }

  protected convertDateFromClient(stableVetInfo: IStableVetInfo): IStableVetInfo {
    const copy: IStableVetInfo = Object.assign({}, stableVetInfo, {
      date: stableVetInfo.date ? stableVetInfo.date.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.date = res.body.date ? moment(res.body.date).toDate() : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((stableVetInfo: IStableVetInfo) => {
        stableVetInfo.date = stableVetInfo.date ? moment(stableVetInfo.date).toDate() : undefined;
      });
    }
    return res;
  }
}
