import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';
import { AddComponent } from './component/add/add.component';
import { ListComponent } from './component/list/list.component';


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
    AngularEditorModule
  ]
})
export class BlogModule { }