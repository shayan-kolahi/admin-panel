import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './components/exchange/exchange.component';
import {ShareModule} from "../share/share.module";
import {ExchangeService} from "../services/exchange.service";


@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ExchangeRoutingModule
  ],
  providers:[ExchangeService]
})
export class ExchangeModule { }
