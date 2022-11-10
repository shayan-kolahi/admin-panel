import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogInInput} from '../interface/log-in-input'
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LogInApiService {
  constructor(private http: HttpClient,) { }
  login_api(body:LogInInput): Observable<any>{
    return this.http.post<any>('http://g-api.gmodern.ir/api/login', body)
  }


}
