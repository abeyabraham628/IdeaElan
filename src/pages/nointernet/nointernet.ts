import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppConst } from '../../providers/strings';

/**
 * Generated class for the NointernetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nointernet',
  templateUrl: 'nointernet.html',
})
export class NointernetPage {
  //noInternetImage:string=AppConst.noInternet
  noInternetImage:string=AppConst.noInternet
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    alert(this.noInternetImage)
  }

  

}
