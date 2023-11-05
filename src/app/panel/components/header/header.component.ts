import {Output, EventEmitter, Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() { }
  @Output() status_sidebar = new EventEmitter<boolean>();
  isActive : boolean = true;
  click_status() {
    this.isActive = !this.isActive
    this.status_sidebar.emit(this.isActive);
  }
}
