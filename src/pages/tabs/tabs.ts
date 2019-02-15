import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

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
 
  
 /* tab1Root = 'NewuserPage';
  tab2Root = 'SystemsPage' ;
  tab3Root = 'RecruitmentPage';*/
  tab0Root='HomePage';
  tab1Root='ApplyLeavePage';
  tab2Root='PayslipPage';
  tab3Root='InboxPage';
  tab0Params:any
  userId:any
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth) {
    this.tab0Params=this.navParams.data
    
  }
  
  

  logout(){
    this.afAuth.auth.signOut()
            .then(() => this.navCtrl.setRoot('LoginPage'));
  }

  changepassword(){
   
    this.navCtrl.push('ChangepasswordPage');
  }


}
