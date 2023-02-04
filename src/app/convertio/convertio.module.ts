import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertioRoutingModule } from './convertio-routing.module';
import { ConvertioComponent } from './components/convertio/convertio.component';
import {ConvertioService} from "../services/convertio.service";


@NgModule({
  declarations: [
    ConvertioComponent
  ],
  imports: [
    CommonModule,
    ConvertioRoutingModule
  ],
  providers:[ConvertioService]
})
export class ConvertioModule { }
