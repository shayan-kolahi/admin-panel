import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderComponent} from "./component/loader/loader.component";
import {BoxDirective} from "./directives/box.directive";
import { InputDirective } from './directives/input.directive';
import { ButtonDirective } from './directives/button.directive';
@NgModule({
  declarations: [
    LoaderComponent,
    BoxDirective,
    InputDirective,
    ButtonDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [LoaderComponent,BoxDirective,InputDirective,ButtonDirective]
})
export class ShareModule { }
