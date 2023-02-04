import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {coins} from "../interface/coins";

@Injectable({
  providedIn: CurrencyService,
})

export class CurrencyService {
  constructor(private http: HttpClient,) { }
  currencyApi() : Observable<any>{
    return this.http.get<coins[]>("https://api.coinpaprika.com/v1/coins")
  }
  currencyApiDetails(coin:string) : Observable<any>{
    return this.http.get<any>(`https://api.coinpaprika.com/v1/coins/${coin}`)
  }
}
