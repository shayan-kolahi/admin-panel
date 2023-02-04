import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConvertioComponent} from "./components/convertio/convertio.component";

const routes: Routes = [
  {path: "", component: ConvertioComponent,title: "AdminPanel | Convertio"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertioRoutingModule { }
