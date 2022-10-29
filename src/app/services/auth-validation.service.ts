import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthValidationService {
  constructor() { }


  AuthValidationService(hi: string) {
    console.log(hi)
  }
}
