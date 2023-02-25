import { Component, OnDestroy, OnInit } from '@angular/core';
import {BitmaxService} from "../../../services/bitmax.service";
import {interval} from "rxjs";
import {AppService} from "../../../services/app.service";


@Component({
  selector: 'app-bitmax',
  templateUrl: './bitmax.component.html',
  styleUrls: ['./bitmax.component.scss']
})
export class BitmaxComponent implements OnInit , OnDestroy{

  constructor(private BitmaxService:BitmaxService,private AppService:AppService,) { }
  loader:boolean = true;
  data:any;
  data_name:any;
  interval_ping$ = interval(10000);
  interval_ping_unsubscribe$:any;
  ngOnInit(): void {
    this.subscribe()
    this.ping()
  }
  subscribe(){
    this.BitmaxService.getData().subscribe({
      next:(data:any) => {
        this.loader = false;
        if(data.pong == null){
          this.data = data
          this.data_name = this.data.m.n.split("-")
        }
      },
      error: (err:any) => {this.AppService.Swal_reload();},
      complete: () => console.log('complete')
    })
  }
  ping(){
    this.interval_ping_unsubscribe$ = this.interval_ping$.subscribe(x => {
      this.BitmaxService.getData(true);
    });

  }
  ngOnDestroy() {
    this.BitmaxService.socketSubject.unsubscribe();
    this.interval_ping_unsubscribe$.unsubscribe()
  }

  change_market(id:string) {
    console.log(id)
    this.BitmaxService.socketSubject.next({"event": "market", "data": id})
  }
}
