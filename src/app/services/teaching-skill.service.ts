import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:TeachingSkillService
})
export class TeachingSkillService {

  constructor(private http: HttpClient) { }
  TeachingSkill(userId:number) : Observable<any>{
    return this.http.get<any>(`${environment.baseUrl}TeachingSkill?TeacherId=${userId}`)
  }

}
