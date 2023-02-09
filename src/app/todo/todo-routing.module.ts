import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from "./components/todo/todo.component";
import {TodoPageComponent} from "./components/todo-page/todo-page.component";

const routes: Routes = [
  {path: "", component: TodoComponent},
  {path: "details/:id", component: TodoPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
