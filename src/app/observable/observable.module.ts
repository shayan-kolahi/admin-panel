import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './components/observable/observable.component';


@NgModule({
  declarations: [
    ObservableComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ]
})
export class ObservableModule { }
