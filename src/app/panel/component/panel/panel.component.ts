import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isActive_sidebar : boolean = true;
  status_sidebar(e: boolean) {
    console.log(e)
    this.isActive_sidebar = e;
  }

}
