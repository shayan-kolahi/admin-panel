import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './component/weather/weather.component';
import {FormsModule} from "@angular/forms";
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    CdkAccordionModule,
    WeatherRoutingModule,
    FormsModule
  ]
})
export class WeatherModule { }
