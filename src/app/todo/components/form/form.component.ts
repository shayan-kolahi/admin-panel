import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {TodoService} from "../../../services/todo.service";
import {todo} from "../../../interface/todo";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit {
  @ViewChild('input') private input : ElementRef
  @ViewChild('textarea') private textarea : ElementRef
  @ViewChild('form') private form : ElementRef

  change_submit_button:boolean = false;
  todo: todo = {
    id: 0,
    title: "",
    description: "",
    date: "",
    time: "",
  };
  data_edit:any;
  unSubscribe_onChanged_edit:any;
  constructor(private TodoService: TodoService) {};

  // edit
  submit_edit() {
    let local = JSON.parse(<any>localStorage.getItem("todo"))
    this.change_submit_button = false;
    local.forEach((item:todo) => {
      if (item.id == this.data_edit.id){
        item.title = this.todo.title;
        item.description = this.todo.description;
      }
    })
    this.input.nativeElement.classList.remove("bg-blue-200")
    this.textarea.nativeElement.classList.remove("bg-blue-200")
    localStorage.setItem("todo", JSON.stringify(local))
    this.TodoService.onChanged.next(JSON.parse(<any>localStorage.getItem("todo")));
    this.remove_value();
  }
  // edit

  // submit
  submit() {
    if (this.todo.title === ""){
      this.input.nativeElement.classList.add("border-pink-700")
    } else if( this.todo.description === "") {
      this.textarea.nativeElement.classList.add("border-pink-700");
    } else {
      this.value_date_time();
      this.localStorage_value();
      this.TodoService.onChanged.next(JSON.parse(<any>localStorage.getItem("todo")));
      this.remove_value();
    }
  }
  localStorage_value() {
    let local = JSON.parse(<any>localStorage.getItem("todo"))
    if (Array.isArray(local) && local.length > 0) {
      this.todo.id = local[0].id + 1;
      local.unshift(this.todo);
      localStorage.setItem("todo", JSON.stringify(local))
    } else {
      this.todo.id = 1;
      let arr = [this.todo];
      localStorage.setItem("todo", JSON.stringify(arr))
    }
  };
  value_date_time() {
    this.todo.date = new Date().toLocaleDateString('fa-IR');
    this.todo.time = new Date().toLocaleTimeString('fa-IR');
  };
  // submit

  remove_value() {
    this.todo.id = NaN;
    this.todo.title = "";
    this.todo.description = "";
    this.todo.date = ""
    this.todo.time = "";
  };
  removeBorderPink(e:string) {
    if(e === "input"){
      this.input.nativeElement.classList.remove("border-pink-700")
    } else {
      this.textarea.nativeElement.classList.remove("border-pink-700")
    }
  }
  ngOnDestroy(): void {
    this.TodoService.onChanged_edit.next(null);
  }
  ngAfterViewInit() {
    this.unSubscribe_onChanged_edit =  this.TodoService.onChanged_edit.subscribe(
      response => {
        if (response) {
          this.change_submit_button = true;
          this.data_edit = response;
          this.todo.id = response.id;
          this.todo.title = response.title;
          this.todo.description = response.description;
          this.form.nativeElement.scrollIntoView({behavior: 'smooth',})
          this.input.nativeElement.classList.add("bg-blue-200")
          this.textarea.nativeElement.classList.add("bg-blue-200")
        }
      }
    )
  }
}
