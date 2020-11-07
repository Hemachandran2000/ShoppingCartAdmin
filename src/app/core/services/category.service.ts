import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  base_URL = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.base_URL + 'api/Category');
    //  ({ headers : new HttpHeaders()
    //   .set('Auth','Hemanth')
    //   .set('Content-Type','application/json; charset=utf-8'),
    //   observe: 'events' }
    // ).pipe(
    //   tap(event => {
    //     console.log(event);
    //     if (event.type === HttpEventType.Sent) {
    //       console.log(event.type);
    //     }
    //     if (event.type === HttpEventType.ResponseHeader) {
    //       console.log(event.type);
    //     }
    //     if (event.type === HttpEventType.Response) {
    //       console.log(event.type);
    //     }
    //   })
    // );
  }

  addCategory(categoryModel: Category): Observable<Category> {

    const category = JSON.stringify(categoryModel);
    return this.http.post<Category>(this.base_URL + 'api/Category', category);
  }
}
