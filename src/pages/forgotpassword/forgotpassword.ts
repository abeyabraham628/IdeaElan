import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  constructor(public toast:ToastController,public navCtrl: NavController, public navParams: NavParams,private afauth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  paswordResetForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])

    })

    resetPassword(){
      let toastCtrl=this.toast
      let navCtrl=this.navCtrl
      var auth = this.afauth.auth;
      var emailAddress = this.paswordResetForm.controls['email'].value;

            auth.sendPasswordResetEmail(emailAddress).then(function() {
              const toast = toastCtrl.create({
                message: 'Password reset link has been sent to your mail.',
                duration: 5000
              });
              toast.present()
              navCtrl.setRoot('LoginPage')

              
              
            }).catch(function(error) {
              const toast = toastCtrl.create({
                message: error,
                duration: 3000
              });
              toast.present();
              
            })
          
          }

          goBack(){
            this.navCtrl.setRoot('LoginPage')
          }
}
