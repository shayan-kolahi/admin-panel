import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ServiceAuthService} from "../services/service-auth.service";
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
  constructor(private cookieService: CookieService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cookieService.get('token') !== ""){
      return true;
    }else {
      return false;
    }
  }

}
