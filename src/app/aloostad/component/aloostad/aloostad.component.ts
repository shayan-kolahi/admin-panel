import { Component, OnInit } from '@angular/core';
import {AloostadService} from "../../../services/aloostad.service";
import {AppService} from "../../../services/app.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-aloostad',
  templateUrl: './aloostad.component.html',
  styleUrls: ['./aloostad.component.scss']
})
export class AloostadComponent implements OnInit {

  constructor(private AloostadService:AloostadService ,
    private AppService:AppService,
    ) { }
  isLoader:boolean = true;
  data:any;
  ngOnInit(): void {

    let Toast = this.AppService.Toast
    this.AloostadService.profile(this.AppService.TeacherId).subscribe({
      next:data => {
        this.data = data
        this.isLoader = false;
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

}
