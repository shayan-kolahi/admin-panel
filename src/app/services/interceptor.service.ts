import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private cookieService: CookieService,) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
    const authReq = httpRequest.clone({headers: httpRequest.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this.cookieService.get('token'))
        .set('Token', this.cookieService.get('token'))
    })
    return next.handle(authReq);
  }
}
