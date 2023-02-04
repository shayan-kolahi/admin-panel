import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ListComponent } from './component/list/list.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";
import {BlogService} from "../services/blog.service";


@NgModule({
    declarations: [
        ListComponent,
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        ShareModule,
    ],
    exports: [
        ListComponent
    ],
    providers: [BlogService]
})
export class BlogModule { }
