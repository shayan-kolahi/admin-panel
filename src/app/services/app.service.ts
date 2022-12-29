import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private cookieService: CookieService,) { }

  get token ():string{
    return this.cookieService.get('token')
  }
  get TeacherId ():number{
    return Number(this.cookieService.get('TeacherId'))
  }

}
