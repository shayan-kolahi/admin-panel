import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn:WeatherService
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  weatherApi(search:string) : Observable<any>{
    let headers = new HttpHeaders()
      .set('X-RapidAPI-Key','6490f9c7ffmsh438eb188ad4c31bp186a82jsn30eb4d741daf')
      .set('X-RapidAPI-Host','weather-by-api-ninjas.p.rapidapi.com')
    let params = new HttpParams()
      .set('city', search)
    return this.http.get<any>("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather" , {'headers' : headers,'params' : params})
  }

}
