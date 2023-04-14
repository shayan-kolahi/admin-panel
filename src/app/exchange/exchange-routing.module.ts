import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExchangeComponent} from "./components/exchange/exchange.component";

const routes: Routes = [
  {path:"",component:ExchangeComponent,title: "AdminPanel | Exchange"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }
