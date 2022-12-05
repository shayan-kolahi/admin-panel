import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private WeatherService:WeatherService) { }

  searchInput:string = "landon";
  weatherInfo:any;
  isLoader:boolean = true
  ngOnInit(): void {
    this.WeatherApi()
  }

  formSearch(){
    this.WeatherApi()
  }


  WeatherApi(){
    console.log("asd")
    this.WeatherService.weatherApi(this.searchInput).subscribe({
      next: data => {
        this.isLoader = false;
        console.log(this.weatherInfo = data)
      },
      error: err => {
        alert("مشکلی پیش اومده :(")
      }
    })
    this.isLoader = true;
  }



}

