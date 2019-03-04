import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private pageTitle = new BehaviorSubject<string>('Home');
  currentTitle= this.pageTitle.asObservable();

  constructor() { }

  changeTitle(title: string) {
   
    this.pageTitle.next(title)
  }

}