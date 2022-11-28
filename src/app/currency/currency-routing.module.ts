import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrencyComponent} from "./component/currency/currency.component";
import {DetailsComponent} from "./component/details/details.component";

const routes: Routes = [
  {path: "", component: CurrencyComponent},
  {path: "details/:id", component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
