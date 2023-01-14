import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: AloostadService
})
export class AloostadService {
  constructor(private http: HttpClient) { }
  profile(userId:number) : Observable<any>{
    return this.http.get<any>(`${environment.baseUrl}Teacher/getById?id=${userId}`)
  }
}
