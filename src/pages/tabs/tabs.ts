import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import {AddItPage} from '../add-it/add-it'
import {NewuserPage} from '../newuser/newuser'
import {RecruitmentPage} from '../recruitment/recruitment'
import {SystemsPage} from '../systems/systems'

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  //Headername="users";
  
  tab1Root = NewuserPage;
  tab2Root = SystemsPage ;
  tab3Root = RecruitmentPage;
  tab4Root =  SystemsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
