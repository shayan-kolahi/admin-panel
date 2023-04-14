import { Component, OnDestroy, OnInit } from '@angular/core';
import {ExchangeService} from "../../../services/exchange.service";
import {interval} from "rxjs";
import {AppService} from "../../../services/app.service";


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit , OnDestroy{

  constructor(private ExchangeService:ExchangeService, private AppService:AppService,) { }
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
    this.ExchangeService.getData().subscribe({
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
      this.ExchangeService.getData(true);
    });

  }
  ngOnDestroy() {
    this.ExchangeService.socketSubject.unsubscribe();
    this.interval_ping_unsubscribe$.unsubscribe()
  }

  change_market(id:string) {
    console.log(id)
    this.ExchangeService.socketSubject.next({"event": "market", "data": id})
  }
}
