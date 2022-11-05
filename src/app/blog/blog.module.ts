import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';
import { AddComponent } from './component/add/add.component';
import { ListComponent } from './component/list/list.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EditComponent,
    ViewComponent,
    AddComponent,
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
