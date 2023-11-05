import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)},
  {path: "**", loadChildren: () => import('./pageNotFound/pageNotFound.module').then(m => m.PageNotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
