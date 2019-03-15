import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
support:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.support="newIssue"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

}
