import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides} from 'ionic-angular';

/**
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruitment',                          
  templateUrl: 'recruitment.html',
})
export class RecruitmentPage {
 
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
  }
  selectedTab(ind){
    this.slides.lockSwipes(false);
    this.slider.slideTo(ind);
    this.slides.lockSwipes(true);
  }
  
}
