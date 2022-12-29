import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AloostadComponent} from "./component/aloostad/aloostad.component";

const routes: Routes = [
  {path: "", component: AloostadComponent},
  {path: "TeachingSkill", loadChildren: () => import('../teaching-skill/teaching-skill.module').then(m => m.TeachingSkillModule)},
  {path: "FreeTime", loadChildren: () => import('../free-time/free-time.module').then(m => m.FreeTimeModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AloostadRoutingModule { }
