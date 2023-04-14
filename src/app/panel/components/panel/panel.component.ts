import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  constructor() { }
  isActive_sidebar : boolean = true;
  ngOnInit(): void {}
  status_sidebar(e: boolean) {
    this.isActive_sidebar = e;
  }
}
