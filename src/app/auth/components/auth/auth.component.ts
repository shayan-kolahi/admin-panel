import { Component, OnInit } from '@angular/core';
import {AuthValidationService} from '../../../services/auth-validation.service'
import {LogInInput} from '../../../interface/log-in-input'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  constructor(private AuthValidationService:AuthValidationService) { }

  ngOnInit(): void {
    console.log(this.AuthValidationService.AuthValidationService("Hi"))
  }
  isActive:boolean = true;
  changeAuth(){
    this.isActive = !this.isActive
  }

  LogInInput:any = {
    email : "" ,
    password : "" ,
  }


  logInValidationAuth(){
    console.log(this.LogInInput.email , this.LogInInput.password)
  }



}
