import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() status_sidebar = new EventEmitter<boolean>();

  isActive : boolean = true;
  click_status() {
    this.isActive = !this.isActive
    this.status_sidebar.emit(this.isActive);
  }

}
