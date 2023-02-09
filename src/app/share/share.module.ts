import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderComponent} from "./components/loader/loader.component";
import {BoxDirective} from "./directives/box.directive";
import { InputDirective } from './directives/input.directive';
import { ButtonDirective } from './directives/button.directive';
import {Spinner_loaderComponent} from "./components/spinner_loader/spinner_loader.component";
@NgModule({
  declarations: [
    LoaderComponent,
    BoxDirective,
    InputDirective,
    ButtonDirective,
    Spinner_loaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [LoaderComponent,BoxDirective,InputDirective,ButtonDirective,Spinner_loaderComponent]
})
export class ShareModule { }
