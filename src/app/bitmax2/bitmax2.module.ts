import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bitmax2RoutingModule } from './bitmax2-routing.module';
import { Bitmax2Component } from './components/bitmax2/bitmax2.component';
import {ShareModule} from "../share/share.module";
import {Bitmax2Service} from "../services/bitmax2.service";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./search-pipe";


@NgModule({
  declarations: [
    Bitmax2Component,
    SearchPipe
  ],
    imports: [
        CommonModule,
        ShareModule,
        Bitmax2RoutingModule,
        FormsModule
    ],
  providers:[Bitmax2Service]
})
export class Bitmax2Module { }
