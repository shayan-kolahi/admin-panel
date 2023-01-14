import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyRoutingModule} from './currency-routing.module';
import {CurrencyComponent} from './component/currency/currency.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {DetailsComponent} from './component/details/details.component';
import {ShareModule} from "../share/share.module";
@NgModule({
  declarations: [
    CurrencyComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    ScrollingModule,
    ShareModule,
    HttpClientModule,
  ],
})
export class CurrencyModule {
}
