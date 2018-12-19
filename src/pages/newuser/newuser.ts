import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides} from 'ionic-angular';

/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {
  @ViewChild('slider') slider:Slides;
page=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectedTab(ind){
    this.slider.slideTo(ind);
  }


}
