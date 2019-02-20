import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


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

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    this.getMessages()
  }

messages=[]
getMessages(){
  this.firebase.list('messages').snapshotChanges().subscribe(snap=>{
    this.messages=snap.map(item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      }

    })
  })
  
}

viewMessages(x){
    let modal=this.modalCtrl.create({
      title:x.subject,
      

    })
    modal.present()
}



}



