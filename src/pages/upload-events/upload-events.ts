import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl,FormGroup,Validators}from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
/**
 * Generated class for the UploadEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-events',
  templateUrl: 'upload-events.html',
})
export class UploadEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afauth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadEventsPage');
  }

  PublishMessageForm=new FormGroup({
    subject:new FormControl('',[Validators.required,Validators.minLength(5)]),
    message:new FormControl('',[Validators.required,Validators.minLength(5)]),
    postedBy:new FormControl(this.afauth.auth.currentUser.uid),
    time:new FormControl(''),
    date:new FormControl(''),

});

publishMessage(){
  this.PublishMessageForm.controls['date'].setValue(new Date().toLocaleDateString())
  this.PublishMessageForm.controls['time'].setValue(new Date().toLocaleTimeString())
  this.firebase.list('messages').push(this.PublishMessageForm.value)
}



}
