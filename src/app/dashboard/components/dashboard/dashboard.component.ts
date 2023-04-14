import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "تعداد بازدید",
          data: [553 , 408 , 947 , 675 , 734 , 325 , 627 , 511 , 630 , 577 , 413 , 496]
        }
      ],
      chart: {
        height: 250,
        type: "bar",
        fontFamily: 'iransans',
        toolbar: {show: false,}
      },
      xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
      }
    };
  }

  ngOnInit(): void {
  }

}
