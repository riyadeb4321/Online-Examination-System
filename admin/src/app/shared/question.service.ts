import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../shared/question1.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'http://localhost:3000/question';
  getquestion() {
    return this.http.get(this.baseURL) ;
  }
  insertquestion( que: Question) {
    console.log(que);
    return this.http.post(this.baseURL, que);
  }
  updatequestion(que: Question) {
    return this.http.put(this.baseURL + `/${que._id}`, que);
  }
  deletequestion(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getqueid(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
}
