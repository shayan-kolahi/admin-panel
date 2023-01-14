import { Component, OnInit } from '@angular/core';
import {interval, take, Observable, map, Subscription, Subject, observable, of, EMPTY, shareReplay,concat} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {data} from "autoprefixer";
import {ObservableInterface} from "../../../interface/observable";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  list1:Observable<any> = EMPTY;
  list2:Observable<any> = EMPTY;
  constructor(private http : HttpClient) { }
  ngOnInit(): void {
    /*
    let interval$ = interval(1000)
    let interval_pipe$ = interval$.pipe(
      take(10),
      map(res => 10 * res)
    )
    let interval_pipe_subscribe$ = interval_pipe$.subscribe((val) => {console.log(val)})
    setTimeout(() => {interval_pipe_subscribe$.unsubscribe()},5000)
    */

    let http = this.http.get<ObservableInterface[]>("https://jsonplaceholder.typicode.com/posts").pipe(
      shareReplay()
    )
    this.list1 = http.pipe(
      map(fill => fill.filter(res => res.id > 50))
    )
    this.list2 = http.pipe(
      map(fill => fill.filter(res => res.id < 50))
    )








  let source1 = of(1,2,3)
  let source2 = of(4,5,6)

    let result = concat(source1, source2)
    result.subscribe(console.log)

  }

}
