import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../../services/weather.service";
import {AppService} from "../../../services/app.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private WeatherService:WeatherService,private AppService:AppService) { }
  searchInput:string = "tehran";
  weatherInfo:any;
  isLoader:boolean = true;
  ngOnInit(): void {
    this.WeatherApi()
  }
  formSearch(){
    this.WeatherApi()
  }
  WeatherApi(){
    this.WeatherService.weatherApi(this.searchInput).subscribe({
      next: data => {
        this.isLoader = false;
        this.weatherInfo = data;
        this.weatherInfo.name = this.searchInput
      },
      error: err => {
        this.AppService.Swal_reload()
      }
    })
    this.isLoader = true;
  }



}

