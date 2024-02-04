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
      confirmButtonText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"/></svg>',
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
