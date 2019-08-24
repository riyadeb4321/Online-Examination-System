import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../shared/result.model';
import { Attendexam } from '../shared/attendexam.model';
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  insertAnswer: Result;
  constructor(private http: HttpClient) { }
  readonly baseURL = ' http://localhost:3000/result';
  insertans( result: Result ) {
    return this.http.post(this.baseURL, result);

  }
  getresult(email: string) {
    return this.http.get(this.baseURL + `/${email}`);
  }
  attendexam(email: string, subject: string) {
    return this.http.get('http://localhost:3000/userattend' + `/${email}/${subject}`);
  }
}
