import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './component/currency/currency.component';
import {LoaderComponent} from "../loader/loader.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { DetailsComponent } from './component/details/details.component';


@NgModule({
  declarations: [
    CurrencyComponent,
    LoaderComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    ScrollingModule
  ]
})
export class CurrencyModule { }
