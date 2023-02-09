import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import {ShareModule} from "../share/share.module";
import {FormsModule} from "@angular/forms";
import {TodoService} from "../services/todo.service";
import { TodoPageComponent } from './components/todo-page/todo-page.component';


@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    FormComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    TodoRoutingModule,
    FormsModule
  ],
  providers : [TodoService]
})
export class TodoModule { }
