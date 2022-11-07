import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './component/view/view.component';
import { AddAndEditComponent } from './component/addAndEdit/addAndEdit.component';
import { ListComponent } from './component/list/list.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ViewComponent,
    AddAndEditComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class BlogModule { }
