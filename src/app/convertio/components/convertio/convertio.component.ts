import { Component, OnInit } from '@angular/core';
import {ConvertioService} from "../../../services/convertio.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-convertio',
  templateUrl: './convertio.component.html',
  styleUrls: ['./convertio.component.scss']
})
export class ConvertioComponent implements OnInit {

  constructor(private ConvertioService:ConvertioService) { }

  ngOnInit(): void {
    this.ConvertioService.Convertio().subscribe({
      next:data => {console.log(data)},
      error:err => {console.log(err)},
      complete:() => {console.log("complete")}
    })
  }

}
