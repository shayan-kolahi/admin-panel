import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoParent:any = {
    id:0,
    title:"",
    description:"",
    date: "",
    time: "",
  };
  amirParent:string='aaaa'

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.amirParent='shayan'
    },5000)
  }

  edit(event:any){
    this.todoParent=event;
  }

}
