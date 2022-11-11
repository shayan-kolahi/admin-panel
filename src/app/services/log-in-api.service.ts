import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogInInput} from '../interface/log-in-input'
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LogInApiService {
  constructor(private http: HttpClient,) { }
  login_api(body:LogInInput): Observable<any>{
    let headers= new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    });
    return this.http.post<any>('http://g-api.gmodern.ir/api/login', body,{headers:headers})
  }


}
