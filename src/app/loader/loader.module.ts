import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderRoutingModule } from './loader-routing.module';
// import {LoaderComponent} from "./components/loader/loader.component";


@NgModule({
  declarations: [
    // LoaderComponent
  ],
  imports: [
    CommonModule,
    LoaderRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class LoaderModule { }
