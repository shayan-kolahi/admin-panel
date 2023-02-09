import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [

    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  ]
})
export class DashboardModule { }
