import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  constructor() { }
  isActive_sidebar : boolean = true;
  ngOnInit(): void {
    if(window.innerWidth < 1024){
      this.isActive_sidebar = false
    }
  }
  status_sidebar(e: boolean) {
    this.isActive_sidebar = e;
  }
}
