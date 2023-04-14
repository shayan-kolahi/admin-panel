import { Component, OnInit } from '@angular/core';
import {SidebarMenu} from '../../../interface/sidebar-menu'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  SidebarMenu:SidebarMenu[] = [
    {
      text : 'داشبورد',
      icon : 'fa-house-blank',
      link : "/dashboard"
    },
    {
      text : 'درباره ارزهای دیجیتال',
      icon : 'fa-coins',
      link : "/info_currency"
    },
    {
      text : 'آب و هوا (vpn) ',
      icon : 'fa-sun-cloud',
      link : "/weather"
    },
    {
      text : 'لیست کارا',
      icon : 'fa-sparkles',
      link : "/todo"
    },
    {
      text : 'الو استاد',
      icon : 'fa-sparkles',
      link : "/aloostad"
    },
    {
      text : 'بازار حرفه ای رمز ارز',
      icon : 'fa-sparkles',
      link : "/exchange"
    },
    {
      text : 'قیمت ارز دیجیتال',
      icon : 'fa-sparkles',
      link : "/market"
    },
  ]
}
