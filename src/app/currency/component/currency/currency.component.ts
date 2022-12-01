import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../../services/currency.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
})
export class CurrencyComponent implements OnInit {

  constructor(private CurrencyService:CurrencyService) { }

  currency:any;
  isLoader:boolean = true
  ngOnInit(): void {
    this.CurrencyService.currencyApi().subscribe({
      next: data => {
        this.isLoader = false;
        this.currency = data
      }
    })

  }

}
