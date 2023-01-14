import { Component } from '@angular/core';
import { ValidationService } from '../../../services/validation.service'
import { Router } from '@angular/router';
import { LogInApiService } from "../../../services/log-in-api.service";
import { CookieService } from "ngx-cookie-service";
import { LogInInput } from '../../../interface/log-in-input';
import {AppService} from "../../../services/app.service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private AuthValidationService:ValidationService,
              private router: Router,
              private LogInApiService: LogInApiService,
              private cookieService: CookieService,
              private AppService:AppService
  ){}
  eye:boolean = false;
  loading:boolean= false;
  LogInInput:LogInInput = {
    UserName: "0480263477",
    Password: "09129058125",
    Role: "Teacher"
  }
  logInValidationAuth(){
    let Toast = this.AppService.Toast
    if (!this.AuthValidationService.isEmpty(this.LogInInput.UserName) ||
      !this.AuthValidationService.isEmpty(this.LogInInput.Password)){
      Toast.fire({
        icon: 'error',
        title: 'خطا',
        text: 'فیلد ها را پر کنید',
      })
    }
    else {
      this.loading = true;
      this.LogInApiService.login_api(this.LogInInput).subscribe({
        next: data => {
          this.cookieService.set('token', data.Token);
          this.cookieService.set('TeacherId', data.TeacherId);
          this.router.navigate(['/']) 
        },
        error:err => {
          if (err.message === "Http failure response for https://back.aloostad.com/Auth/Login: 0 Unknown Error"){
            Toast.fire({
              icon: 'error',
              title: 'خطا',
              text: 'در اتصال به اینترنت',
            })
            this.loading = false;
          } else if (err.message === "Http failure response for https://back.aloostad.com/Auth/Login: 401 OK"){
            Toast.fire({
              icon: 'error',
              title: 'خطا',
              text: 'کاربری با این اطلاعات یافت نشد',
            })
            this.loading = false;
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
}
