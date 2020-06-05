import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { take, switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IStableVetInfo } from './model/stable-vet-info.model';


type EntityResponseType = HttpResponse<IStableVetInfo>;
type EntityArrayResponseType = HttpResponse<IStableVetInfo[]>;

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService {

  constructor(private firestore: AngularFirestore, private authService: AuthService, protected http: HttpClient) {

  }

  public resourceUrl = 'http://localhost:8080/' + 'api/stable-vet-infos';

  getVetInspections() {

    return this.authService.userId.pipe(take(1), switchMap(userID => {
      return this.firestore.collection("/vet_procedure_info", ref => ref.where('club_id', '==', userID)).snapshotChanges();
    }))
  }

  get(): Observable<EntityArrayResponseType> {
    return this.http.get<IStableVetInfo[]>(this.resourceUrl, { observe: 'response' });
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



  createInspection(title: string,
    veterinar: string,
    price: string,
    date: string,
    horseProcedures: any
  ) {

    console.log("CREATE")
    var func = this.addInspectionParticipants.bind(this);

    this.authService.userId.subscribe(userID => {

      console.log(userID)

      this.firestore.collection("vet_procedure_info").add({
        title: title,
        vet: veterinar,
        price: price,
        date: date,
        club_id: userID
      })
        .then(function (docRef) {
          func(horseProcedures, docRef.id);
        })
    })
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
}
