import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuardAuthGuard} from "./guards/guard-auth.guard";

const routes: Routes = [
  {path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: "", loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule), canActivate: [GuardAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
