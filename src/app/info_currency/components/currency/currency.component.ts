import { Component, OnInit } from '@angular/core';
import {Info_currencyService} from "../../../services/info_currency.service";
import {coins} from "../../../interface/coins";
import { OwlOptions } from 'ngx-owl-carousel-o';
import {AppService} from "../../../services/app.service";

@Component({
  selector: 'app-info_currency',
  templateUrl: './currency.component.html',
})
export class CurrencyComponent implements OnInit {
  constructor(private CurrencyService:Info_currencyService, private AppService:AppService) { }
  isLoader:boolean = true
  best_currency:coins[];
  currency:coins[];

  ngOnInit(): void {
    this.CurrencyService.currencyApi().subscribe({
      next:data =>{
        this.isLoader = false
        this.best_currency = data.slice(0, 5)
        this.currency = data;
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
    navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M85.14 475.8c-3.438-3.141-5.156-7.438-5.156-11.75c0-3.891 1.406-7.781 4.25-10.86l181.1-197.1L84.23 58.86c-6-6.5-5.625-16.64 .9062-22.61c6.5-6 16.59-5.594 22.59 .8906l192 208c5.688 6.156 5.688 15.56 0 21.72l-192 208C101.7 481.3 91.64 481.8 85.14 475.8z\"/></svg>","<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M234.8 36.25c3.438 3.141 5.156 7.438 5.156 11.75c0 3.891-1.406 7.781-4.25 10.86L53.77 256l181.1 197.1c6 6.5 5.625 16.64-.9062 22.61c-6.5 6-16.59 5.594-22.59-.8906l-192-208c-5.688-6.156-5.688-15.56 0-21.72l192-208C218.2 30.66 228.3 30.25 234.8 36.25z\"/></svg>"],
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
