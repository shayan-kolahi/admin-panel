import { Component, OnInit } from '@angular/core';
import {SidebarMenu} from '../../../interface/sidebar-menu'
import {IsActiveMatchOptions} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options:IsActiveMatchOptions={
    matrixParams:'subset',
    queryParams:'ignored',
    fragment:'ignored',
    paths:'subset'
  }

  SidebarMenu:SidebarMenu[] = [
    {
      text : 'داشبورد',
      icon : 'fa-house-blank',
      link : "/dashboard"
    },
    {
      text : 'کریپتو کارنسی',
      icon : 'fa-coins',
      link : "/currency"
    },
    {
      text : 'آب و هوا',
      icon : 'fa-sun-cloud',
      link : "/weather"
    },
    {
      text : 'وبلاگ',
      icon : 'fa-sparkles',
      link : "/blog"
    },
    {
      text : 'مقالات مفید',
      icon : 'fa-sparkles',
      link : "/articles"
    },

  ]


}
