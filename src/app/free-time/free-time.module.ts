import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeTimeRoutingModule } from './free-time-routing.module';
import { FreeTimeComponent } from './components/free-time/free-time.component';
import {LoaderModule} from "../loader/loader.module";


@NgModule({
  declarations: [
    FreeTimeComponent
  ],
  imports: [
    CommonModule,
    FreeTimeRoutingModule,
    LoaderModule
  ]
})
export class FreeTimeModule { }
