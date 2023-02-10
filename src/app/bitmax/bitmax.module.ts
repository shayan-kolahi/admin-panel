import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitmaxRoutingModule } from './bitmax-routing.module';
import { BitmaxComponent } from './components/bitmax/bitmax.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    BitmaxComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    BitmaxRoutingModule
  ]
})
export class BitmaxModule { }