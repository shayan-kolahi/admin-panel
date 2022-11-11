import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  isEmpty:boolean = true;
  infoBlog:any;
  ngOnInit(): void {
    this.infoBlog = JSON.parse(<any>localStorage.getItem("blog"))
    this.isEmpty = this.infoBlog === null;
    this.getList()
  }

  /**
  * get the list from free api
  * */
  getList(){
    this._http.get('https://reqres.in/api/users/').subscribe(
      result=>{
        console.log(result)
      }
    )
  }


  clickDelete(idBlog:any){
    console.log(this.infoBlog.splice(idBlog , 1))
    localStorage.setItem("blog" , JSON.stringify(this.infoBlog))
  }


}
