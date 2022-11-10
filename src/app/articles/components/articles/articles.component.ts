import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    this.http.post<any>('http://g-api.gmodern.ir/api/get/posts', {}).subscribe({
      next: data => {
        console.log(data)
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
