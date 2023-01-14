import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: BlogService
})
export class BlogService {
  constructor(private http: HttpClient) { }
  blog_get():Observable<any>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts`)
  }
  blog_post():Observable<any>{
    let headers = new HttpHeaders()
      .set('X-RapidAPI-Key','6490f9c7ffmsh438eb188ad4c31bp186a82jsn30eb4d741daf')
      .set('X-RapidAPI-Host','weather-by-api-ninjas.p.rapidapi.com')
    return this.http.post<any>(`https://jsonplaceholder.typicode.com/posts`,{
        title: 'shayan kolahi',
        body: 'shayan kolahi is a programming',
        userId: 1,
    },{'headers' : headers})
  }
}
