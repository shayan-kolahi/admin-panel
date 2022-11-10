import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PanelComponent} from "./component/panel/panel.component";

const routes: Routes = [
  {path: "", component : PanelComponent , children : [
      {path: "blog", loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)},
      {path: "articles", loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesModule)},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
