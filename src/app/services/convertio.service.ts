import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConvertioService {

  constructor(private http : HttpClient) { }

  Convertio(): Observable<any>{
    return this.http.post<any>("https://api.convertio.co/convert",{
      apikey : "a4e3566d805706f40c3fa0fb758eaea5",
      file : "https://www.iran-tech.com/under_construction/abr_o_moj/abr_o_moj_2/images/images/banner/s1.jpg",
      outputformat : "png"
    })
  }

}
