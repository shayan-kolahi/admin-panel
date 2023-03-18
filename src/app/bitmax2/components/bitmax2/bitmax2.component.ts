import {Component, OnInit} from '@angular/core';
import {Bitmax2Service} from "../../../services/bitmax2.service";
import {forkJoin} from "rxjs";


@Component({
  selector: 'app-bitmax',
  templateUrl: './bitmax2.component.html',
  styleUrls: ['./bitmax2.component.scss']
})
export class Bitmax2Component implements OnInit {
  constructor(private Bitmax2Service: Bitmax2Service) {}
  result: any[] = [];
  term: string;
  status: string = "loading";
  check_price:boolean=true;
  ngOnInit(): void {
    forkJoin(this.Bitmax2Service.statApi, this.Bitmax2Service.coinsApi).subscribe({
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
