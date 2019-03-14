import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
history:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.history=this.navParams.data
    console.log(this.history)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintenancehistoryPage');
  }

}
