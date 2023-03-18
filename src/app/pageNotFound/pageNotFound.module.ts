import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './pageNotFound-routing.module';
import {PageNotFoundComponent} from "./components/pageNotFound/pageNotFound.component";
import {ShareModule} from "../share/share.module";



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
