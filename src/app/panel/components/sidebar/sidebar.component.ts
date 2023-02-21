import { Component, OnInit } from '@angular/core';
import {SidebarMenu} from '../../../interface/sidebar-menu'
import {AppService} from "../../../services/app.service";
import {AloostadService} from "../../../services/aloostad.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private AloostadService:AloostadService,private AppService:AppService) { }
  nameProfile?:string;
  isActiveLoading:boolean = true
  ngOnInit(): void {
    this.AloostadService.profile(this.AppService.TeacherId).subscribe({
      next:data => {
        this.nameProfile = data.FirstName + " " + data.LastName;
        this.isActiveLoading = false
      },
      error:err => {
        this.AppService.fire('خطا' , 'در اتصال به اینترنت')
      },
    })
  }
  SidebarMenu:SidebarMenu[] = [
    {
      text : 'داشبورد',
      icon : 'fa-house-blank',
      link : "/dashboard"
    },
    {
      text : 'کریپتوکارنسی',
      icon : 'fa-coins',
      link : "/currency"
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
      text : 'وبلاگ',
      icon : 'fa-sparkles',
      link : "/blog"
    },
    {
      text : 'الو استاد',
      icon : 'fa-sparkles',
      link : "/aloostad"
    },
    {
      text : 'بیتمکس',
      icon : 'fa-sparkles',
      link : "/bitmax"
    },
  ]


}
