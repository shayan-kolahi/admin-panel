
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachingSkillRoutingModule } from './teaching-skill-routing.module';
import { TeachingSkillComponent } from './components/teaching-skill/teaching-skill.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    TeachingSkillComponent
  ],
  imports: [
    CommonModule,
    TeachingSkillRoutingModule,
    ShareModule
  ]
})
export class TeachingSkillModule { }
