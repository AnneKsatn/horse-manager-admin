import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AngularFirestore} from '@angular/fire/firestore'
// import { AngularFireAuth} from '@angular/fire/auth'
// import * as firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { AuthService } from '../auth/auth.service';
import { take, map } from 'rxjs/operators';
import { SERVER_API_URL } from '../app.constants';
import { IResident, IResidentInfo } from './model/resident.model';
import * as moment from 'moment';

type EntityResponseType = HttpResponse<IResident>;
type EntityArrayResponseType = HttpResponse<IResident[]>;


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

  id_club: number;

  public resourceUrl = SERVER_API_URL + 'api/residents';

  residents = [];

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore, private authService: AuthService, private http: HttpClient) {
    this.id_club = this.authService.getUserID();
   }

  query(): Observable<HttpResponse<IResidentInfo[]>> {
    return this.http
      .get<IResidentInfo[]>(this.resourceUrl, { observe: 'response' })
      .pipe(map((res: HttpResponse<IResidentInfo[]>) => this.convertDateArrayFromServer(res)));
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

    
    // create(horse: IHorse): Observable<EntityResponseType> {
    //   const copy = this.convertDateFromClient(horse);
    //   return this.http
    //     .post<IHorse>(this.resourceUrl, copy, { observe: 'response' })
    //     .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    // }
  
    // update(horse: IHorse): Observable<EntityResponseType> {
    //   const copy = this.convertDateFromClient(horse);
    //   return this.http
    //     .put<IHorse>(this.resourceUrl, copy, { observe: 'response' })
    //     .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    // }
  
    // // find(id: number): Observable<EntityResponseType> {
    // //   return this.http
    // //     .get<IHorse>(`${this.resourceUrl}/${id}`, { observe: 'response' })
    // //     .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    // // }
  
  
    // query(req?: any): Observable<EntityArrayResponseType> {
    //   const options = createRequestOption(req);
    //   return this.http
    //     .get<IHorse[]>(this.resourceUrl, { params: options, observe: 'response' })
    //     .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    // }
  
    // delete(id: number): Observable<HttpResponse<{}>> {
    //   return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    // }
  
    // protected convertDateFromClient(horse: IHorse): IHorse {
    //   const copy: IHorse = Object.assign({}, horse, {
    //     birth: horse.birth && horse.birth.isValid() ? horse.birth.toJSON() : undefined,
    //   });
    //   return copy;
    // }
  
    // protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    //   if (res.body) {
    //     res.body.birth = res.body.birth ? moment(res.body.birth) : undefined;
    //   }
    //   return res;
    // }

  
  
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
