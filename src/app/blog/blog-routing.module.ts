import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./component/add/add.component";
import {ListComponent} from "./component/list/list.component";

const routes: Routes = [
  {path : '' , component : ListComponent},
  {path : 'add' , component : AddComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
