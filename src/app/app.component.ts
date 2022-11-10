import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private cookieService: CookieService,) { }

  ngOnInit(): void {
    if (this.cookieService.get('token') !== "") {
      this.router.navigate(['/'])
    }else {
      this.router.navigate(['/auth'])
    }
  }
}
