import { Injectable } from '@angular/core';
import {webSocket} from "rxjs/internal/observable/dom/webSocket";

@Injectable({
  providedIn: 'root'
})
export class BitmaxService {
  constructor() { }
  socketSubject : any = webSocket("wss://api.bitmax.ir/ws/ws")
  getData(){
    this.socketSubject.next({"event":"market","data":"BTC-USDT"})
    this.socketSubject.next({"event": "ping", "data": ""})

    return this.socketSubject.asObservable();
  }
}
