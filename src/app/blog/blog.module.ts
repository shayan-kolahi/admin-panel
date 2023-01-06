import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ViewComponent } from './component/view/view.component';
import { AddAndEditComponent } from './component/addAndEdit/addAndEdit.component';
import { ListComponent } from './component/list/list.component';
import {FormsModule} from "@angular/forms";
import {LoaderModule} from "../loader/loader.module";


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
    LoaderModule,
  ]
})
export class BlogModule { }
