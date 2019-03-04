import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ModalController,AlertController } from 'ionic-angular';
import { messaging } from 'firebase';
import { PageHeaderComponent } from '../../components/page-header/page-header';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  

  constructor(public afauth:AngularFireAuth,public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    this.getMessages()
  }

messages=[]
getMessages(){
  this.firebase.list(`messages/${this.afauth.auth.currentUser.uid}`).snapshotChanges().subscribe(snap=>{
    this.messages=snap.map(item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      }

    })
  })

  
}

viewMessage(x) {
  const alert = this.alertCtrl.create({
    title: x.subject,
    message:x.message,
    buttons: ['OK']
  });
  alert.present();
}



}



