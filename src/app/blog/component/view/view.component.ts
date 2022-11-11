import { Component, OnInit } from '@angular/core';
import {ValidationService} from "../../../services/validation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  blogId:any
  localGetItem:any = JSON.parse(<any>localStorage.getItem("blog"))
  localItem:any;
  constructor(private AuthValidationService:ValidationService,private router: Router,private getId: ActivatedRoute,) {
    getId.params.subscribe((params) => {
      this.blogId = params["id"]
    })
  }

  ngOnInit(): void {
    this.localItem  = this.localGetItem.filter((id:any) => id.id == this.blogId)
  }

}
