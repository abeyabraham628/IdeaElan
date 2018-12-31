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
  //Systems="hai"; 
 // Headername="Systems";
  @ViewChild('slider') slider:Slides;
  @ViewChild(Slides) slides: Slides;
  page=0;
  icons:string="0";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons="0";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
    this.slides.lockSwipes(true);
  // let  Headername="hello";
  }

  selectedTab(ind){
    this.slides.lockSwipes(false);
    this.slider.slideTo(ind);
    this.slides.lockSwipes(true);
  }

}
