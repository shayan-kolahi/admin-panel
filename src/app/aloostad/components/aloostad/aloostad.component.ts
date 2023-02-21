import { Component, OnInit } from '@angular/core';
import {AloostadService} from "../../../services/aloostad.service";
import {AppService} from "../../../services/app.service";

@Component({
  selector: 'app-aloostad',
  templateUrl: './aloostad.component.html',
  styleUrls: ['./aloostad.component.scss']
})
export class AloostadComponent implements OnInit {

  constructor(private AloostadService:AloostadService ,
    private AppService:AppService,
    ) { }
  isLoader:boolean = true;
  data:any;
  ngOnInit(): void {
    this.AloostadService.profile(this.AppService.TeacherId).subscribe({
      next:data => {
        this.data = data
        this.isLoader = false;
      },
      error:err => {
        this.AppService.Swal_reload();
      },
    })
  }

}
