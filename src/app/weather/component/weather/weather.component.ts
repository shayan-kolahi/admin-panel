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
  isLoader:boolean = true;
  current_observation:any;
  items:any[]=[];
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
        this.current_observation=data.current_observation;

        for(let i=0;i< Object.keys(this.current_observation).length;i++){
          this.items.push(
            {
              name:Object.keys(this.current_observation)[i],
              value:Object.values(this.current_observation)[i]
            }
          )
        }
        console.log(data.current_observation,this.items)
      },
      error: err => {
        alert("مشکلی پیش اومده :(")
      }
    })
    this.isLoader = true;
  }



}

