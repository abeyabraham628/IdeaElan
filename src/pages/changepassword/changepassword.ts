import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})


export class ChangepasswordPage {
  private password:string;
  companyLogo:string="assets/imgs/26053.png"
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private firebase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }


  updatePassword(){
    var user = this.afAuth.auth.currentUser;
    var newPassword = this.password;
    var firebase=this.firebase;
    var navCtrl=this.navCtrl;
    user.updatePassword(newPassword).then(function() {

     firebase.object(`TempLogin/${user.uid}`).set({
        status : "Set",
     }
    ).then(function(){
      navCtrl.popToRoot()
      navCtrl.setRoot('TabsPage');
    });// end of push
      
    }).catch(function(error) {
      console.error(error)
    });
  }


  cancel(){
    this.navCtrl.pop()
  }

}
