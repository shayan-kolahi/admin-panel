import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeTimeRoutingModule } from './free-time-routing.module';
import { FreeTimeComponent } from './components/free-time/free-time.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    FreeTimeComponent
  ],
  imports: [
    CommonModule,
    FreeTimeRoutingModule,
    ShareModule
  ]
})
export class FreeTimeModule { }
