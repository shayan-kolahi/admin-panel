import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    console.warn("we have no auth")
    console.error("we have no auth")
    console.warn("we have no auth")
    alert("we have no auth")
  }



}
