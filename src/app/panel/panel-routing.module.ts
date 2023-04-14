import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelComponent} from "./components/panel/panel.component";

const routes: Routes = [
  {
    path: "",
    component: PanelComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: "dashboard", loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: "info_currency", loadChildren: () => import('../info_currency/info_currency.module').then(m => m.Info_currencyModule)},
      {path: "weather", loadChildren: () => import('../weather/weather.module').then(m => m.WeatherModule)},
      {path: "todo", loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule)},
      {path: "aloostad", loadChildren: () => import('../aloostad/aloostad.module').then(m => m.AloostadModule)},
      {path: "exchange", loadChildren: () => import('../exchange/exchange.module').then(m => m.ExchangeModule)},
      {path: "market", loadChildren: () => import('../market/market.module').then(m => m.MarketModule)},
      {path: "Observable", loadChildren: () => import('../observable/observable.module').then(m => m.ObservableModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
