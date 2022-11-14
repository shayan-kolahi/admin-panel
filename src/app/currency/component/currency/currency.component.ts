import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(private http: HttpClient,) { }

  currency:any;
  ngOnInit(): void {
    this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").subscribe({
      next: data => {
        console.log(this.currency = data)
      }
    })
  }

}
