import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AloostadRoutingModule } from './aloostad-routing.module';
import { AloostadComponent } from './component/aloostad/aloostad.component';
import {LoaderModule} from "../loader/loader.module";


@NgModule({
  declarations: [
    AloostadComponent
  ],
    imports: [
        CommonModule,
        AloostadRoutingModule,
        LoaderModule
    ]
})
export class AloostadModule { }
