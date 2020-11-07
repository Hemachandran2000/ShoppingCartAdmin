import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubCategory } from '../models/category';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SubcategoryService {

  base_URL = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.base_URL + 'api/SubCategory');
  }

  addSubCategory(subcategoryModel: SubCategory) {

    const subcategory =  JSON.stringify(subcategoryModel);
    return this.http.post<SubCategory>(this.base_URL + 'api/SubCategory', subcategory).toPromise();
  }
}
