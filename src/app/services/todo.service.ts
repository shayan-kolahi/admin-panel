import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn:TodoService
})
export class TodoService {
  onChanged: BehaviorSubject<any>           = new BehaviorSubject<any>(null);

  constructor() { }

}
