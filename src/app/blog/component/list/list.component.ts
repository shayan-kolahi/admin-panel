import {Component, OnInit} from '@angular/core';
import {BlogService} from "../../../services/blog.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  constructor(private BlogService:BlogService) { }
  ngOnInit(): void {
  }
}
