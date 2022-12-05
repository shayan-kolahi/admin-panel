import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  weatherApi(search:string) : Observable<any>{
    let headers = new HttpHeaders()
      .set('X-RapidAPI-Key','6490f9c7ffmsh438eb188ad4c31bp186a82jsn30eb4d741daf')
      .set('X-RapidAPI-Host','yahoo-weather5.p.rapidapi.com')
    return this.http.get<any>(`https://yahoo-weather5.p.rapidapi.com/weather?location=${search}&format=json&u=f` , {'headers' : headers})
  }

}
