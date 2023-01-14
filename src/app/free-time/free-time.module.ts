import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeTimeRoutingModule } from './free-time-routing.module';
import { FreeTimeComponent } from './components/free-time/free-time.component';
import {ShareModule} from "../share/share.module";
import {FreeTimeService} from "../services/free-time.service";


@NgModule({
  declarations: [
    FreeTimeComponent
  ],
  imports: [
    CommonModule,
    FreeTimeRoutingModule,
    ShareModule
  ],
  providers:[FreeTimeService]
})
export class FreeTimeModule { }
