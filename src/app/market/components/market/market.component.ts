import {Component, OnInit} from '@angular/core';
import {MarketService} from "../../../services/market.service";
import {forkJoin} from "rxjs";


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  constructor(private MarketService: MarketService) {}
  result: any[] = [];
  term: string;
  status: string = "loading";
  check_price:boolean=true;
  ngOnInit(): void {
    forkJoin(this.MarketService.statApi, this.MarketService.coinsApi).subscribe({
        next: (data: any) => {
          this.status = "success";
          let stats: any[] = data[0].message;
          let coins: any[] = data[1].message;
          stats.forEach(stat=>{
            coins.forEach(coin=>{
              if(coin.symbol == stat.symbol){
                this.result.push({...coin,...stat})
              }
            })
          })
          console.log(this.result)
        },
        error: err => {
          console.log(err);
          this.status = "error";
        },
        complete: () => {
          console.log("complete")
        }
      })
  }

  change_check_price(e:string){
    if (e === "irt"){
      this.check_price = true;
    }else {
      this.check_price = false;
    }

  }

}
