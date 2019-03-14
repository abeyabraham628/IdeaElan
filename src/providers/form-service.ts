import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataService {

  private oldValue = new Subject<string>();
  currentValue= this.oldValue.asObservable();
  
  constructor() { }

  changeValue(newValue: string) {
   
    this.oldValue.next(newValue)
  }

}