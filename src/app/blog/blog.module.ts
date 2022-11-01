import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './component/blog/blog.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';


@NgModule({
  declarations: [
    BlogComponent,
    EditComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
