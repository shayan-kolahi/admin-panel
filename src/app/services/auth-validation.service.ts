import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthValidationService {
  constructor() { }


  isEmpty(el: string):boolean {
    return el !== "";
  }

  isEmail(emailAdress:string):boolean{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !!emailAdress.match(regex);
  }
  isRePassword(RePassword:string , MainPassword:string):boolean{
    return RePassword === MainPassword;
  }



}
