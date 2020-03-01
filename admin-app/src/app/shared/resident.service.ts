import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ResidentService{

  constructor(private httpClient: HttpClient){}

  getHorses(): Observable<any>{
    return this.httpClient.get('http://192.168.1.39:3000/horses');
  }

  getPeopleById(id: string){
    return this.httpClient.get('http://192.168.1.39:3000/horses', {
      params: new HttpParams().set('id', id)
  });
  }

}
