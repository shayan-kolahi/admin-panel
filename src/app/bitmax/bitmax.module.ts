import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitmaxRoutingModule } from './bitmax-routing.module';
import { BitmaxComponent } from './components/bitmax/bitmax.component';
import {ShareModule} from "../share/share.module";
import {BitmaxService} from "../services/bitmax.service";


@NgModule({
  declarations: [
    BitmaxComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    BitmaxRoutingModule
  ],
  providers:[BitmaxService]
})
export class BitmaxModule { }
