import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../../../services/validation.service'
import {LogInInput} from '../../../interface/log-in-input'
import {RegisterInput} from '../../../interface/register-input'
import { Router } from '@angular/router';
import {LogInApiService} from "../../../services/log-in-api.service";
import Swal from 'sweetalert2';
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  constructor(private AuthValidationService:ValidationService,
              private router: Router,
              private LogInApiService: LogInApiService,
              private cookieService: CookieService,
              ) { }

  ngOnInit(): void {}

  eyes = {
    eye1 : false,
    eye2 : false,
    eye3 : false,
  }
  loading:boolean= false;

  isActive:boolean = true;
  changeAuth(){this.isActive = !this.isActive}




  LogInInput:LogInInput = {
    email : "" ,
    password : "" ,
  }
  logInValidationAuth(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      confirmButtonText:'<i class="far fa-times"></i>',
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (!this.AuthValidationService.isEmpty(this.LogInInput.email) ||
      !this.AuthValidationService.isEmpty(this.LogInInput.password)){
      Toast.fire({
        icon: 'error',
        title: 'خطا',
        text: 'فیلد ها را پر کنید',
      })
    } else if (!this.AuthValidationService.isEmail(this.LogInInput.email)){
      Toast.fire({
        icon: 'error',
        title: 'خطا',
        text: 'لطفا ایمیل درست وارد کنید !',
      })
    } else {
      this.loading = true;
      this.LogInApiService.login_api(this.LogInInput).subscribe({
        next: data => {
          this.cookieService.set('token', data.data.token);
          this.router.navigate(['/'])
        },
        error: error => {
          console.log(error.error);
          Toast.fire({
            icon: 'error',
            title: 'خطا',
            text: error.error.message,
          })
          this.loading = false;
        },
      })

    }
  }




  RegisterInput:RegisterInput = {
    name : "" ,
    email : "" ,
    re_password : "" ,
    password : "" ,
  }
  registerValidationAuth(){
    if (!this.AuthValidationService.isEmpty(this.RegisterInput.name) ||
      !this.AuthValidationService.isEmpty(this.RegisterInput.email) ||
      !this.AuthValidationService.isEmpty(this.RegisterInput.password) ||
      !this.AuthValidationService.isEmpty(this.RegisterInput.re_password)){
      alert("فیلد ها را پر کنید !")
    } else if (!this.AuthValidationService.isEmail(this.RegisterInput.email)){
      alert("لطفا ایمیل درست وارد کنید !")
    } else if (!this.AuthValidationService.isRePassword(this.RegisterInput.re_password , this.RegisterInput.password)){
      alert("لطفا رمز کاربری و تکرار رمز کاربری را چک کنید !")
    } else {
      localStorage.setItem("auth" , JSON.stringify(this.RegisterInput))
      this.router.navigate(['/'])
    }
  }


}
