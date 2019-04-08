//Abey Abraham
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policy',
  templateUrl: 'policy.html',
})
export class PolicyPage {
companyLogo:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.companyLogo='assets/imgs/companylogo.png'
  }
  
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad PolicyPage');
  }
  popPage(){
    this.navCtrl.pop()
  }

}
