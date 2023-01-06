import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient,) { }
  currencyApi() : Observable<any>{
    return this.http.get<any>("https://api.coinpaprika.com/v1/coins")
  }
  currencyApiDetails(coin:string) : Observable<any>{
    return this.http.get<any>(`https://api.coinpaprika.com/v1/coins/${coin}`)
  }

}
