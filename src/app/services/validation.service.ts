import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() { }
  isEmpty(el: string):boolean {
    return el !== "";
  }
  isEmptyObject(el: any) {
    Object.entries(el).forEach(([key, value]) => {
      if(value == ""){
        return "false"
      } else {
        return "true"
      }
    });
  }
  isEmail(emailAdress:string):boolean{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !!emailAdress.match(regex);
  }
  isRePassword(RePassword:string , MainPassword:string):boolean{
    return RePassword === MainPassword;
  }
}
