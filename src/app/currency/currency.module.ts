import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CurrencyRoutingModule} from './currency-routing.module';
import {CurrencyComponent} from './component/currency/currency.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {DetailsComponent} from './component/details/details.component';
import {LoaderModule} from "src/app/loader/loader.module";


@NgModule({
            declarations: [
              CurrencyComponent,
              DetailsComponent,
            ],
            imports: [
              CommonModule,
              CurrencyRoutingModule,
              ScrollingModule,
              LoaderModule
            ]
          })
export class CurrencyModule {}
