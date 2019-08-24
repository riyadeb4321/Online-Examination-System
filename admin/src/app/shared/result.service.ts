import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }
  readonly baseURL = ' http://localhost:3000/ressub';
  getresult(subject: string) {
    return this.http.get(this.baseURL + `/${subject}`);
  }
}
