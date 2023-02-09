import { Component, OnDestroy, OnInit } from '@angular/core';
import {webSocket} from "rxjs/internal/observable/dom/webSocket";

@Component({
  selector: 'app-bitmax',
  templateUrl: './bitmax.component.html',
  styleUrls: ['./bitmax.component.scss']
})
export class BitmaxComponent implements OnInit , OnDestroy{

  constructor() { }
  api = webSocket("wss://api.bitmax.ir/ws/ws");
  loader:boolean = true;
  ngOnInit(): void {
    this.api.subscribe({
      next: msg => {console.log(new Date(), "Message received:", msg);this.loader = false},
      error: err => console.log(err),
      complete: () => console.log('complete')
    })
    this.api.next({"event":"market","data":"BTC-USDT"})
    setTimeout(() => {
      this.api.next({"event": "ping", "data": ""})
    }, 10000)
  }

  Interval(){
    setInterval(() => {} , 10000)
  }


  ngOnDestroy() {
    this.api.unsubscribe();
  }
}
