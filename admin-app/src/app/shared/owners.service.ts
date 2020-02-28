import {Injectable} from '@angular/core';

export interface Owner {
  name: string;
  phone: string;
}

Injectable()
export class OwnerService {
  constructor(private httpClient: HttpClient){}

  getCars(): Observable<Owner[]> {
    return this.httpClient.get('http://localhost:3000/owners')
  }
}
