import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {info_currencyRoutingModule} from './info_currency-routing.module';
import {CurrencyComponent} from './components/currency/currency.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {DetailsComponent} from './components/details/details.component';
import {ShareModule} from "../share/share.module";
import {Info_currencyService} from "../services/info_currency.service";
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
    CurrencyComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    info_currencyRoutingModule,
    ScrollingModule,
    ShareModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers:[Info_currencyService]
})
export class Info_currencyModule {
}
