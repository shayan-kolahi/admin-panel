import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './components/auth/auth.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ShareModule} from "../share/share.module";

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
  ]
})
export class AuthModule {
}
