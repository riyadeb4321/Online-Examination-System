import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reguser } from './reguser.model';

@Injectable({
  providedIn: 'root'
})
export class VwuserService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/viewuser';
  getuser() {
    return this.http.get(this.baseURL) ;
  }
}
