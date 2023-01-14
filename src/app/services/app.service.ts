import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import Swal from 'sweetalert2';

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

  get Toast ():any{
    return Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: true,
      confirmButtonText:'<i class="far fa-times"></i>',
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  }

}
