import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:FreeTimeService
})
export class FreeTimeService {
  constructor(private http: HttpClient) { }
  FreeTime(userId:number) : Observable<any>{
    return this.http.get<any>(`${environment.baseUrl}FreeTime?TeacherId=${userId}`)
  }
}
