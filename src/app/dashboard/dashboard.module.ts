import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ShareModule} from "../share/share.module";
import {NgApexchartsModule} from "ng-apexcharts";


@NgModule({
  declarations: [

    DashboardComponent
  ],
  imports: [
    NgApexchartsModule,
    ShareModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  ]
})
export class DashboardModule { }
