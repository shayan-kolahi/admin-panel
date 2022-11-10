import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private cookieService: CookieService,
              private http: HttpClient,) { }

  ngOnInit(): void {
    if (this.cookieService.get('token') !== "") {
      this.router.navigate(['/'])



      this.http.get('http://g-api.gmodern.ir/api/user', { 'headers': {
            'content-type' : 'application/json',
            'Authorization' :  `Bearer ${this.cookieService.get('token')}`,
            'Access-Control-Allow-Origin': '*'
      }}).subscribe({
        next: data => {
          console.log("data =>")
          console.log(data)
        },
        error: error => {
          console.log("error =>")
          console.log(error)
          this.router.navigate(['/auth'])
        }
      })



    }else {
      this.router.navigate(['/auth'])
    }
  }
}
