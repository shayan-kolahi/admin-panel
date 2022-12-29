import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient,) { }
  headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Methods','DELETE, POST, GET, OPTIONS')
    .set('Access-Control-Allow-Headers','Content-Type, Authorization, X-Requested-With')
  currencyApi() : Observable<any>{
    return this.http.get<any>("https://api.coinpaprika.com/v1/coins")
  }
  currencyApiDetails(coin:string) : Observable<any>{
    return this.http.get<any>(`https://api.coinpaprika.com/v1/coins/${coin}`)
  }

}
