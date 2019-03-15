import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the MaintenancehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintenancehistory',
  templateUrl: 'maintenancehistory.html',
})
export class MaintenancehistoryPage {
key:any
history=[]
  constructor(public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase) {
    this.key=this.navParams.data
    this.getHistory()
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintenancehistoryPage');
  }

  getHistory(){
    let loader=this.loadingCtrl.create({
      spinner:'dots',
      content:'Loading',
    })
    loader.present()
    this.firebase.list(`maintenance/${this.key}`).snapshotChanges().subscribe(snap=>{
      this.history=snap.map(item=>{
        return{
          $key:item.key,
          ...item.payload.val()
         }
      })
      loader.dismiss()
      })
   }

}// end of class
