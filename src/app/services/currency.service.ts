import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient,) { }

  currencyApi() : Observable<any>{
    return this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  }

}
