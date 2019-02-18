import { Calendar } from './../../providers/calendar';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApproveLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approve-leave',
  templateUrl: 'approve-leave.html',
})
export class ApproveLeavePage {

  months=new Calendar()
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }


}
