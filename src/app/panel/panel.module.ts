import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelComponent } from './components/panel/panel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
