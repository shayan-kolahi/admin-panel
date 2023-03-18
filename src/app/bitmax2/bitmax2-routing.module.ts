import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Bitmax2Component} from "./components/bitmax2/bitmax2.component";

const routes: Routes = [
  {path:"",component:Bitmax2Component,title: "AdminPanel | Bitmax"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bitmax2RoutingModule { }
