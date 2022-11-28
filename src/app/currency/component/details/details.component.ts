import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrencyService} from "../../../services/currency.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  blogId:any;
  constructor(private CurrencyService:CurrencyService ,private getId: ActivatedRoute,) {
    getId.params.subscribe((params) => {
      this.blogId = params["id"]
    })
  }

  isLoader:boolean = true
  data: any;
  links:any;
  ngOnInit(): void {
    this.CurrencyService.currencyApiDetails(this.blogId).subscribe({
      next:data => {
        this.isLoader = false;
        this.data = data
        this.links = Object.entries(data.links)
        this.links.shift()
      }
    })
  }

}
