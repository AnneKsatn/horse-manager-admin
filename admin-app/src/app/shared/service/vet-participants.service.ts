import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../../app.constants';
import { IStableVet } from '../model/stable-vet.model';



type EntityResponseType = HttpResponse<IStableVet>;
type EntityArrayResponseType = HttpResponse<IStableVet[]>;



@Injectable({
  providedIn: 'root'
})
export class VetParticipantsService {

  public resourceUrl = SERVER_API_URL + 'api/stable-vets';

  constructor(private http: HttpClient) { }

  get(infoId: string): Observable<EntityArrayResponseType> {
    return this.http
      .get<IStableVet[]>(this.resourceUrl+ `?vet=${infoId}`, {observe: 'response' })
  }

  update(stableVetInfo: IStableVet): Observable<EntityResponseType> {
    return this.http
      .put<IStableVet>(this.resourceUrl, stableVetInfo, { observe: 'response' });
  }
}
