import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../../services/currency.service";

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss']
})
export class BestComponent implements OnInit {

  constructor(private CurrencyService:CurrencyService) { }

  currency:any;
  ngOnInit(): void {
    this.CurrencyService.currencyApi().subscribe({
      next: data => {
        this.currency = data
      }
    })
  }

}
