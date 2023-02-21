import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Swal from "sweetalert2";
import {TodoService} from "src/app/services/todo.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data:any;
  constructor(private TodoService: TodoService) {
    this.TodoService.onChanged.subscribe(
      response => {
        if (JSON.parse(<any>localStorage.getItem("todo")) !== null && JSON.parse(<any>localStorage.getItem("todo")).length > 0) {
          this.data = response
        } else {
          this.data = false
        }
      }
    )
  }
  edit(item: any , e:any) {
    this.TodoService.onChanged_edit.next(item);
    e.stopPropagation();
  }
  ngOnInit(): void {
    if (JSON.parse(<any>localStorage.getItem("todo")) !== null && JSON.parse(<any>localStorage.getItem("todo")).length > 0) {
      this.data = JSON.parse(<any>localStorage.getItem("todo"))
    } else {
      this.data = false
    }
  }
  remove(id: number) {
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
        let removeItem = JSON.parse(<any>localStorage.getItem("todo")).filter((res: any) => res.id !== id)
        localStorage.setItem("todo", JSON.stringify(removeItem))
        this.TodoService.onChanged.next(JSON.parse(<any>localStorage.getItem("todo")));
      }
    })
  }
}
