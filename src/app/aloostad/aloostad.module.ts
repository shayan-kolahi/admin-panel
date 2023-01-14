import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AloostadRoutingModule } from './aloostad-routing.module';
import { AloostadComponent } from './component/aloostad/aloostad.component';
import {ShareModule} from "../share/share.module";
@NgModule({
  declarations: [
    AloostadComponent
  ],
  imports: [
    CommonModule,
    AloostadRoutingModule,
    ShareModule
  ]
})
export class AloostadModule { }