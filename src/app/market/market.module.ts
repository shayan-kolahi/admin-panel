import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './components/market/market.component';
import {ShareModule} from "../share/share.module";
import {MarketService} from "../services/market.service";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./search-pipe";


@NgModule({
  declarations: [
    MarketComponent,
    SearchPipe
  ],
    imports: [
      CommonModule,
      ShareModule,
      MarketRoutingModule,
      FormsModule
    ],
  providers:[MarketService]
})
export class MarketModule { }
