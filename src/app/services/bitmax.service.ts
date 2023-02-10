import {Injectable} from '@angular/core';
import {webSocket} from "rxjs/internal/observable/dom/webSocket";

@Injectable({
              providedIn: 'root'
            })
export class BitmaxService
{
  constructor() { }

  socketSubject: any = webSocket("wss://api.bitmax.ir/ws/ws")

  getData(isPing: boolean = false)
  {
    if (!isPing)
    {
      this.socketSubject.next({"event": "market", "data": "BTC-USDT"})
    }
    else
    {
      this.socketSubject.next({"event": "ping", "data": ""})
    }


    return this.socketSubject.asObservable();
  }
}
