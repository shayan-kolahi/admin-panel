import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthComponent
  ],
    imports: [
        CommonModule,
        MatInputModule,
        AuthRoutingModule,
        FormsModule,
    ]
})
export class AuthModule { }
