import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewuserPage} from '../newuser/newuser'

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the BotabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-botabs',
  templateUrl: 'botabs.html',
})
export class BotabsPage {
  tab1Root = NewuserPage;
  tab2Root =   NewuserPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotabsPage');
  }

}
