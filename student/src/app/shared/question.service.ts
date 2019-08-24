import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question.model';
import { Category} from './category.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/viewques';
  readonly baseURL1 = 'http://localhost:3000/question';

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  getques(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
  getqueid(_id: string) {
    return this.http.get(this.baseURL1 + `/${_id}`);
  }
}
