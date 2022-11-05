import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../../../services/validation.service'
import {LogInInput} from '../../../interface/log-in-input'
import {RegisterInput} from '../../../interface/register-input'
import { Router } from '@angular/router';
import {ServiceAuthService} from "../../../services/service-auth.service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  constructor(private AuthValidationService:ValidationService,
              private router: Router,
              private ServiceAuthService:ServiceAuthService) { }

  ngOnInit(): void {}

  eyes = {
    eye1 : false,
    eye2 : false,
    eye3 : false,
  }

  isActive:boolean = true;
  changeAuth(){this.isActive = !this.isActive}




  LogInInput:LogInInput = {
    email : "" ,
    password : "" ,
  }
  logInValidationAuth(){
    if (!this.AuthValidationService.isEmpty(this.LogInInput.email) ||
      !this.AuthValidationService.isEmpty(this.LogInInput.password)){
      alert("فیلد ها را پر کنید !")
    } else if (!this.AuthValidationService.isEmail(this.LogInInput.email)){
      alert("لطفا ایمیل درست وارد کنید !")
    } else {
      this.ServiceAuthService.changeActive()
      localStorage.setItem("auth" , JSON.stringify(this.LogInInput))
      this.router.navigate(['/'])
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
      this.ServiceAuthService.changeActive()
      localStorage.setItem("auth" , JSON.stringify(this.RegisterInput))
      this.router.navigate(['/'])
    }
  }


}
