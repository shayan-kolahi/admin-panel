import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AloostadComponent} from "./components/aloostad/aloostad.component";

const routes: Routes = [
  {path: "", component: AloostadComponent,title: "AdminPanel | Aloostad"},
  {path: "TeachingSkill", loadChildren: () => import('../teaching-skill/teaching-skill.module').then(m => m.TeachingSkillModule)},
  {path: "FreeTime", loadChildren: () => import('../free-time/free-time.module').then(m => m.FreeTimeModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AloostadRoutingModule { }
