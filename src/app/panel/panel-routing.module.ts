import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelComponent} from "./component/panel/panel.component";

const routes: Routes = [
  {
    path     : "",
    component: PanelComponent,
    children : [
      {
        path      : '',
        redirectTo: 'dashboard',
        pathMatch : 'full'
      },
      {path: "dashboard", loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: "blog", loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)},
      {path: "currency", loadChildren: () => import('../currency/currency.module').then(m => m.CurrencyModule)},
      {path: "weather", loadChildren: () => import('../weather/weather.module').then(m => m.WeatherModule)},
      {path: "aloostad", loadChildren: () => import('../aloostad/aloostad.module').then(m => m.AloostadModule)},
    ]
  },

];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class PanelRoutingModule {}
