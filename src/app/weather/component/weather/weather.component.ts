import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private WeatherService:WeatherService) { }

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
        console.log(this.weatherInfo)

      },
      error: err => {
        window.location.reload();
      }
    })
    this.isLoader = true;
  }



}

