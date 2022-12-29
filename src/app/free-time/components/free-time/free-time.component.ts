import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../services/app.service";
import {FreeTimeService} from "../../../services/free-time.service";

@Component({
  selector: 'app-free-time',
  templateUrl: './free-time.component.html',
  styleUrls: ['./free-time.component.scss']
})
export class FreeTimeComponent implements OnInit {

  constructor(private FreeTimeService:FreeTimeService , private AppService:AppService) { }
  isLoader:boolean = true;
  data:any;
  ngOnInit(): void {
    this.FreeTimeService.FreeTime(this.AppService.TeacherId).subscribe({
      next:data => {
        this.data = data
        this.isLoader = false;
        console.log("FreeTime" , data)
      },
      error:err => {
        console.log(err)
      }
    })
  }

}
