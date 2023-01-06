import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BlogService} from "../../../services/blog.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private BlogService:BlogService) { }
  isLoader:boolean = true;
  data:any;
  ngOnInit(): void {
    this.BlogService.blog_post().subscribe({
      next:data => {
        console.log(data)
      },
      error:err => {
        console.log(err)
      },
    })
      this.BlogService.blog_get().subscribe({
      next:data => {
        this.data = data
        this.isLoader = false;
      },
      error:err => {
        console.log(err)
      },
    })
  }


}
