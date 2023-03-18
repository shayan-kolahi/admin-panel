import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {todo} from "../../../interface/todo";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  getIdTodo:number;
  data:any;
  constructor(private getId: ActivatedRoute,) {
    this.getId.params.subscribe((params) => {
      this.getIdTodo = Number(params["id"]);
    })
  }
  ngOnInit(): void {
    let local = JSON.parse(<any>localStorage.getItem("todo"))
    this.data = local.filter((res:todo) => res.id === this.getIdTodo)
  }
}
