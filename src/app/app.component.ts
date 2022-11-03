import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ServiceAuthService} from "./services/service-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router,private ServiceAuthService:ServiceAuthService) { }
  ngOnInit(): void {
    if (this.ServiceAuthService.isActive || JSON.parse(<any>localStorage.getItem("auth")) !== null) {
      this.router.navigate(['/'])
    }else {
      this.router.navigate(['/auth'])
    }
  }
}
