import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddAndEditComponent} from "./component/addAndEdit/addAndEdit.component";
import {ListComponent} from "./component/list/list.component";
import {ViewComponent} from "./component/view/view.component";

const routes: Routes = [
  {path : '' , component : ListComponent},
  {path : 'add' , component : AddAndEditComponent},
  {path : 'edit/:id' , component : AddAndEditComponent},
  {path : 'view/:id' , component : ViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
