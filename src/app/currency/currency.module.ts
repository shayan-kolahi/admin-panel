import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './component/currency/currency.component';
import {LoaderComponent} from "../loader/loader.component";
import { BestComponent } from './component/best/best.component';


@NgModule({
  declarations: [
    CurrencyComponent,
    LoaderComponent,
    BestComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ]
})
export class CurrencyModule { }
