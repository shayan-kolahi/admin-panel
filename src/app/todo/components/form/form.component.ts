import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  todo:any = {
    id:0,
    title:"",
    description:"",
    date: "",
    time: "",
  };
  constructor(private TodoService:TodoService) { };

  submit() {
    this.todo.id = this.todo.id +1;
    this.value_date_time();
    this.localStorage_value();
    this.remove_value();
  }
  value_date_time(){
    this.todo.date = new Date().toLocaleDateString('fa-IR');
    this.todo.time = new Date().toLocaleTimeString('fa-IR');
  };
  remove_value(){
    this.todo.title = "";
    this.todo.description = "";
    this.todo.date = ""
    this.todo.time = "";
  };
  localStorage_value(){
    let local = JSON.parse(<any>localStorage.getItem("todo"));
    if (Array.isArray(local)){
      local.unshift(this.todo);
      localStorage.setItem("todo" , JSON.stringify(local))
    } else {
      let arr = [this.todo];
      localStorage.setItem("todo" , JSON.stringify(arr))
    }
  };
  // openTextarea
  isTextarea:boolean=false;
  openTextarea(e:any) {
    this.isTextarea=true;
    e.stopPropagation();
  };
  ngOnInit(): void {
    document.body.addEventListener('click' , () => {
      this.isTextarea = false
    })
  };
  // openTextarea

}
