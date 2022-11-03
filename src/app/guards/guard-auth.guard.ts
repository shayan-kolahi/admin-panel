import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ServiceAuthService} from "../services/service-auth.service";


@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
  constructor(private ServiceAuthService:ServiceAuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.ServiceAuthService.isActive || localStorage.getItem("auth")){
      return true;
    }else {
      return false;
    }
  }

}
