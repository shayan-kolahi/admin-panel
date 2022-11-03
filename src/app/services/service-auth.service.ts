import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  constructor() { }

  isActive:boolean = false;
  changeActive(){
    this.isActive = !this.isActive;
  }

}
