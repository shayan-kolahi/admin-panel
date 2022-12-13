import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ViewComponent } from './component/view/view.component';
import { AddAndEditComponent } from './component/addAndEdit/addAndEdit.component';
import { ListComponent } from './component/list/list.component';
import {FormsModule} from "@angular/forms";
import { BtnDeleteComponent } from './component/btn-delete/btn-delete.component';
import { BtnEditComponent } from './component/btn-edit/btn-edit.component';


@NgModule({
  declarations: [
    ViewComponent,
    AddAndEditComponent,
    ListComponent,
    BtnDeleteComponent,
    BtnEditComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
  ]
})
export class BlogModule { }
