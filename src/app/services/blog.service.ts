import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: BlogService
})
export class BlogService {
  constructor(private http: HttpClient) { }
  blog_get():Observable<any>{
    return this.http.get<any>(``)
  }
}
