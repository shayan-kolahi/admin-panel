import {Output, EventEmitter, Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private cookieService: CookieService,
              private router: Router,) { }
  @Output() status_sidebar = new EventEmitter<boolean>();
  isActive : boolean = true;
  ngOnInit(): void {
    if(window.innerWidth < 1024){
      this.isActive = false
    }
  }
  click_status() {
    this.isActive = !this.isActive
    this.status_sidebar.emit(this.isActive);
  }
  logOut(){
    Swal.fire({
      customClass: {
        confirmButton: 'btn btn-link ml-3',
        cancelButton: 'btn btn-primary'
      },
      buttonsStyling: false,
      title: 'مطمئنی',
      text: "میخوای خارج شی ؟",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله',
      cancelButtonText: 'نه بازگشت',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.cookieService.delete('token');
        this.router.navigate(['/auth'])
      }
    })

  }
}
