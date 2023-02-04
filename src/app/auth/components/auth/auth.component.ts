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
          this.AppService.Swal_reload()
        },
      })
    }
  }
}
