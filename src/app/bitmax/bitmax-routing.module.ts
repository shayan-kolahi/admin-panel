import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BitmaxComponent} from "./components/bitmax/bitmax.component";

const routes: Routes = [
  {path:"",component:BitmaxComponent,title: "AdminPanel | Bitmax"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BitmaxRoutingModule { }
