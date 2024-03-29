import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogInInput} from '../interface/log-in-input'
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn:LogInApiService
})
export class LogInApiService {
  constructor(private http: HttpClient,) { }
  login_api(body:LogInInput): Observable<any>{
    let header = HttpHeaders
    return this.http.post<any>(`${environment.baseUrl}Auth/Login`, body)
  }


}
