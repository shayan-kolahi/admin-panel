import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  aasd:number;
  constructor(private getId: ActivatedRoute,) {
    this.getId.params.subscribe((params) => {
      this.aasd = Number(params["id"]);
      console.log(this.amir)
      console.log(this.amir.filter((res:any) => res.id === this.aasd))
      console.log(this.aasd)
    })
  }
  get amir (){
      return JSON.parse(<any>localStorage.getItem("todo"))
  }
  ngOnInit(): void {
  }

}
