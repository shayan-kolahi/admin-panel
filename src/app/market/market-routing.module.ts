import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarketComponent} from "./components/market/market.component";

const routes: Routes = [
  {path:"",component:MarketComponent,title: "AdminPanel | Market"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
