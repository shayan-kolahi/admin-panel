import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  isEmpty:boolean = true;
  infoBlog:any;
  ngOnInit(): void {
    this.infoBlog = JSON.parse(<any>localStorage.getItem("blog"))
    if (this.infoBlog !== null){
      this.isEmpty = false;
      console.log(this.infoBlog)
    }else {
      this.isEmpty = true;
    }
  }
}
