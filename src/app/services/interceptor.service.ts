import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private cookieService: CookieService,) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
    console.log('1111',this.cookieService.get('token'))
    const authReq = httpRequest.clone({headers: httpRequest.headers.set('authorization', 'Bearer ' + this.cookieService.get('token'))})
    console.log(authReq)
    return next.handle(authReq);
  }
}
