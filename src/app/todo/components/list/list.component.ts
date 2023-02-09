import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }
  get amir (){
    if (JSON.parse(<any>localStorage.getItem("todo")) !== null && JSON.parse(<any>localStorage.getItem("todo")).length > 0){
      return JSON.parse(<any>localStorage.getItem("todo"))
    } else {
      return false
    }
  }
  ngOnInit(): void {}
  remove(id:number) {



    Swal.fire({
      customClass: {
        confirmButton: 'btn btn-primary ml-3',
        cancelButton: 'btn btn-link'
      },
      buttonsStyling: false,
      title: 'میخوای پاکش کنی ؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله',
      cancelButtonText: 'نه',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let removeItem = JSON.parse(<any>localStorage.getItem("todo")).filter((res:any) => res.id !== id)
        localStorage.setItem("todo" , JSON.stringify(removeItem))
      }
    })
  }




}
