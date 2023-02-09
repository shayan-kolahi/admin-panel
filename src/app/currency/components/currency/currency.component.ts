import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../../services/currency.service";
import {coins} from "../../../interface/coins";
import { OwlOptions } from 'ngx-owl-carousel-o';
import {AppService} from "../../../services/app.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
})
export class CurrencyComponent implements OnInit {
  constructor(private CurrencyService:CurrencyService,private AppService:AppService) { }
  isLoader:boolean = true
  best_currency:coins[];
  currency:coins[];
  ngOnInit(): void {
    this.CurrencyService.currencyApi().subscribe({
      next:data =>{
        this.isLoader = false
        this.best_currency = data.slice(0, 5)
        this.currency = data
      },
      error:err =>{
        this.AppService.Swal_reload()
      },
    })
  }
  customOptions: OwlOptions = {
    loop: false,
    rtl: true,
    dots: false,
    margin:10,
    navSpeed: 700,
    navText: ["<i class='fa-light fa-chevron-right'></i>","<i class='fa-light fa-chevron-left'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}
