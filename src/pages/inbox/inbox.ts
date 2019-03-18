import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';
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

  loader:any

  constructor(public loadingCtrl:LoadingController,public afauth:AngularFireAuth,public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    this.getMessages()
  }
  
  ionViewDidLeave() {
    this.navCtrl.popToRoot();
  }

messages=[]
getMessages(){
  this.loader=this.loadingCtrl.create({
    spinner:'dots',
    content:'Loading',
     dismissOnPageChange:true
   })
  this.loader.present()
  this.firebase.list(`messages/${this.afauth.auth.currentUser.uid}`).snapshotChanges().subscribe(snap=>{
    this.messages=snap.map(item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      }

    }).reverse()
  })
  this.loader.dismiss()
  
}

viewMessage(x) {
  console.log(x.$key)
  const alert = this.alertCtrl.create({
    title: x.subject,
    message:x.message,
    buttons: [{
      text:'OK',
      handler:()=>{
        this.firebase.object(`messages/${this.afauth.auth.currentUser.uid}/${x.$key}`).update({
          status:'read'
        })
      }
    
    }]
  });
  alert.present();
}



}



