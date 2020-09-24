import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStandingCategogy } from '../../model/categogy.model';
import { SERVER_API_URL } from '../../../app.constants';


type EntityResponseType = HttpResponse<IStandingCategogy>;
type EntityArrayResponseType = HttpResponse<IStandingCategogy[]>;

@Injectable({ providedIn: 'root' })

export class CategoryService {
  
  public resourceUrl = SERVER_API_URL + 'api/standing-categogies';

  constructor(protected http: HttpClient) { }

  create(categogy: IStandingCategogy): Observable<EntityResponseType> {
    return this.http
      .post<IStandingCategogy>(this.resourceUrl, categogy, { observe: 'response' })
  }

  update(categogy: IStandingCategogy): Observable<EntityResponseType> {
    return this.http
      .put<IStandingCategogy>(this.resourceUrl, categogy, { observe: 'response' })
  }

  find(id: number): Observable<HttpResponse<IStandingCategogy>> {
    return this.http
      .get<IStandingCategogy>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(): Observable<EntityArrayResponseType> {
    return this.http
      .get<IStandingCategogy[]>(this.resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
