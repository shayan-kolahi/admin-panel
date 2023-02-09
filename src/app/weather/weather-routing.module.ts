import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherComponent} from "./components/weather/weather.component";

const routes: Routes = [
  {path: "", component : WeatherComponent,title: "AdminPanel | Weather"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
