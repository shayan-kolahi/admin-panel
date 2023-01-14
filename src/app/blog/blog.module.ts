import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ViewComponent } from './component/view/view.component';
import { AddAndEditComponent } from './component/addAndEdit/addAndEdit.component';
import { ListComponent } from './component/list/list.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    ViewComponent,
    AddAndEditComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ShareModule,
  ]
})
export class BlogModule { }
