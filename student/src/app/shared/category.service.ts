import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../shared/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/categories';
  getCategory() {
    return this.http.get(this.baseURL) ;
  }
  insertCategory( cat: Category) {
    return this.http.post(this.baseURL, cat);
  }
  updateCategory(cat: Category) {
    return this.http.put(this.baseURL + `/${cat._id}`, cat);
  }
  deleteCategory(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getcatid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
