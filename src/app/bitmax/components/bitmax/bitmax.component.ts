import { Component, OnDestroy, OnInit } from '@angular/core';
import {BitmaxService} from "../../../services/bitmax.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-bitmax',
  templateUrl: './bitmax.component.html',
  styleUrls: ['./bitmax.component.scss']
})
export class BitmaxComponent implements OnInit , OnDestroy{

  constructor(private BitmaxService:BitmaxService) { }
  loader:boolean = true;
  ws : any = this.BitmaxService.getData()
  data:any;
  interval_ping$ = interval(10000);
  interval_ping_unsubscribe$:any;
  ngOnInit(): void {
    this.subscribe()
    this.ping()
  }
  subscribe(){
    this.BitmaxService.getData().subscribe({
      next:data => {this.data = data;this.loader = false;},
      error: err => console.log(err),
      complete: () => console.log('complete')
    })
  }
  ping(){
    this.interval_ping_unsubscribe$ = this.interval_ping$.subscribe(x => {
      console.log("asd",x)
    });
  }
  ngOnDestroy() {
    this.BitmaxService.getData().unsubscribe();
    this.interval_ping_unsubscribe$.unsubscribe()
  }
}
