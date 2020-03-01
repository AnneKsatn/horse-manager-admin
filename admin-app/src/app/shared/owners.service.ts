import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Owner {
  id: 2,
  name: string;
  phone: string;
  patrinymic: string;
  surname: string;
}

@Injectable({providedIn: 'root'})
export class OwnerService {
  constructor(private httpClient: HttpClient){}

  getOwners(): Observable<any> {
    return this.httpClient.get('http://192.168.1.39:3000/owners')
  }

  addOwner(owner: Owner): Observable<any> {
    return this.httpClient.post('http://192.168.1.39:3000/owners', owner)
  }
}
