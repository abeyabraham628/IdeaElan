import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the SystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-systems',
  templateUrl: 'systems.html',
})
export class SystemsPage {
  @ViewChild('slider') slider:Slides;
  page=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectedTab(ind){
    this.slider.slideTo(ind);
  }

}
