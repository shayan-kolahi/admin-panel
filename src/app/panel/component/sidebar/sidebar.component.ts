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
    let Toast = this.AppService.Toast
    this.AloostadService.profile(this.AppService.TeacherId).subscribe({
      next:data => {
        this.nameProfile = data.FirstName + " " + data.LastName;
        this.isActiveLoading = false
      },
      error:err => {
        if (err.message === "Http failure response for https://back.aloostad.com/Teacher/getById?id=8837: 0 Unknown Error"){
          Toast.fire({
            icon: 'error',
            title: 'خطا',
            text: 'در اتصال به اینترنت',
          })
        } else {
          console.log("New Error => " , err)
          Toast.fire({
            icon: 'error',
            title: 'خطا',
          })
        }
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
      text : 'الو استاد',
      icon : 'fa-sparkles',
      link : "/aloostad"
    },
  ]


}
