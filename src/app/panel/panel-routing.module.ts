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
      {path: "currency", loadChildren: () => import('../currency/currency.module').then(m => m.CurrencyModule)},
      {path: "weather", loadChildren: () => import('../weather/weather.module').then(m => m.WeatherModule)},
      {path: "todo", loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule)},
      {path: "blog", loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule)},
      {path: "aloostad", loadChildren: () => import('../aloostad/aloostad.module').then(m => m.AloostadModule)},
      {path: "bitmax", loadChildren: () => import('../bitmax/bitmax.module').then(m => m.BitmaxModule)},
      {path: "convertio", loadChildren: () => import('../convertio/convertio.module').then(m => m.ConvertioModule)},
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
