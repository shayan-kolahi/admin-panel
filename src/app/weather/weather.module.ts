import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import {FormsModule} from "@angular/forms";
import {WeatherComponent} from "./components/weather/weather.component";
import {ShareModule} from "../share/share.module";
import {WeatherService} from "../services/weather.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule,
    HttpClientModule,
    ShareModule
  ],
  providers:[WeatherService]
})
export class WeatherModule { }
