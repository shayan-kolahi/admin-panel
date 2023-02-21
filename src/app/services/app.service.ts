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
  Swal_reload(){
    Swal.fire({
      customClass: {
        confirmButton: 'btn btn-primary ml-3',
        cancelButton: 'btn btn-link'
      },
      buttonsStyling: false,
      title: 'متاسفانه پاسخی از سرور یافت نشد',
      text: "میخوای صفحه رو رفرش کنی ؟",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله',
      cancelButtonText: 'نه',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    })
  }
  fire(title:string,text:string){
    this.Toast.fire({
      icon: 'error',
      title: title,
      text: text,
    })
  }
}
