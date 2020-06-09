import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoryService } from '../model/category-service.model';
import { SERVER_API_URL } from '../../app.constants';

type EntityResponseType = HttpResponse<ICategoryService>;
type EntityArrayResponseType = HttpResponse<ICategoryService[]>;

@Injectable({ providedIn: 'root' })

export class CategoryConsistService {
  public resourceUrl = SERVER_API_URL  + 'api/category-services';

  constructor(protected http: HttpClient) { }

  create(categogy: ICategoryService): Observable<EntityResponseType> {
    return this.http
      .post<ICategoryService>(this.resourceUrl, categogy, { observe: 'response' })
  }

  update(categogy: ICategoryService): Observable<EntityResponseType> {
    return this.http
      .put<ICategoryService>(this.resourceUrl, categogy, { observe: 'response' })
  }

  find(id: number): Observable<HttpResponse<ICategoryService>> {
    return this.http
      .get<ICategoryService>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(category: number): Observable<EntityArrayResponseType> {
    console.log(category)
    return this.http
      .get<ICategoryService[]>(this.resourceUrl + `?category=${category}`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
