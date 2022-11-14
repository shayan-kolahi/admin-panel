import { Component, OnInit } from '@angular/core';
import {SidebarMenu} from '../../../interface/sidebar-menu'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SidebarMenu:SidebarMenu[] = [
    {
      text : 'داشبورد',
      icon : 'fa-house-blank',
      link : "/"
    },
    {
      text : 'کریپتو کارنسی',
      icon : 'fa-coins',
      link : "/currency"
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
