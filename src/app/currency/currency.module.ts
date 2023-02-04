import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyRoutingModule} from './currency-routing.module';
import {CurrencyComponent} from './component/currency/currency.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {DetailsComponent} from './component/details/details.component';
import {ShareModule} from "../share/share.module";
import {CurrencyService} from "../services/currency.service";
import {CarouselModule} from "ngx-owl-carousel-o";


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
    CarouselModule,
  ],
  providers:[CurrencyService]
})
export class CurrencyModule {
}
