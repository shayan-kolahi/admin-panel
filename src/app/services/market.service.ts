import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: MarketService})
export class MarketService {
  constructor(private http: HttpClient) {}
  statApi:any = this.http.get<any>("https:/api-test.maxpool.site/watcher/price/coins/stat")
  coinsApi:any = this.http.get<any>("https:/api-test.maxpool.site/coins/")
}
