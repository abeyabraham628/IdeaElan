import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataService {

  private oldValue = new Subject<string>();
  currentValue= this.oldValue.asObservable();

  private oldUri = new BehaviorSubject(`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afAuth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5`);
  currentUri= this.oldUri.asObservable();
  
  constructor(private afAuth:AngularFireAuth) { }

  changeValue(newValue: string) {
   
    this.oldValue.next(newValue)
  }



  changeUri(newValue: string) {
   
    this.oldUri.next(newValue)
  }



}