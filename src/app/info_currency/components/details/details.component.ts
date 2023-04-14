import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Info_currencyService} from "../../../services/info_currency.service";
import {CurrencyDetails} from "../../../interface/currency_details";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  currencyId:any;
  isLoader:boolean = true
  item: CurrencyDetails;
  constructor(private CurrencyService:Info_currencyService , private getId: ActivatedRoute,) {
    getId.params.subscribe((params) => {
      this.currencyId = params["id"]
    })
  }
  ngOnInit(): void {
    this.CurrencyService.currencyApiDetails(this.currencyId).subscribe({
      next:data => {
        this.isLoader = false;
        this.item = data;
        Object.keys(data.links).map(element => element.toLowerCase())
        delete data.links.explorer
      }
    })
  }
}
