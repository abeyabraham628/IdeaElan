import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AppConst } from '../../providers/strings';
import { Storage } from '@ionic/storage';




@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  constructor(public toastCtrl:ToastController,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public afauth:AngularFireAuth,
              public storage:Storage
              ) {
                
                
  }
  ionViewDidLeave() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    this.storage.get('emailId').then(email=>this.passwordResetForm.controls['email'].setValue(email))
  }

  passwordResetForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])

    })

    resetPassword(){
      let navCtrl=this.navCtrl
      var auth = this.afauth.auth;
      var emailAddress = this.passwordResetForm.controls['email'].value;

            auth.sendPasswordResetEmail(emailAddress).then(()=> {
              const toast = this.toastCtrl.create({
                message: 'Password reset link has been sent to your mail.',
                duration: 4000
              });
              toast.present();

              setTimeout(()=>{
                navCtrl.setRoot('LoginPage')
              },4500)
             
            }).catch(error=> {
              var errMsg=AppConst.FirebaseError.find(e=>e.code==error.code)
              const toast = this.toastCtrl.create({
                message: errMsg.error,
                duration: 3000
              });
              toast.present();
              
            })
          
          }

          goBack(){
            this.navCtrl.setRoot('LoginPage')
          }
}
