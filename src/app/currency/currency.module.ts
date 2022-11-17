import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './component/currency/currency.component';
import {LoaderComponent} from "../loader/loader.component";


@NgModule({
  declarations: [
    CurrencyComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ]
})
export class CurrencyModule { }
