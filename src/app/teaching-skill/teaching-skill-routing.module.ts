import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeachingSkillComponent} from "./components/teaching-skill/teaching-skill.component";

const routes: Routes = [
  {path:"",component:TeachingSkillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachingSkillRoutingModule { }
