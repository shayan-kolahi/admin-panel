import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './component/weather/weather.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule,
    ShareModule
  ]
})
export class WeatherModule { }
