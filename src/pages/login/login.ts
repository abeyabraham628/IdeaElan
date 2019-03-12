
import { credentials } from './../../providers/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppConst } from '../../providers/strings';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  credentials={} as credentials
  companyLogo:string=AppConst.logo
  loader:any;
  toast:any;
  constructor(public toastCtrl:ToastController,
              public loadingCtrl:LoadingController,
              public modalCtrl:ModalController,
              public navCtrl: NavController, 
              public  afAuth:AngularFireAuth,
              public firebase:AngularFireDatabase,
              public storage:Storage) {}
    

  ionViewDidLoad(){
      this.loader=this.loadingCtrl.create({
        content:'Signin In',
        dismissOnPageChange:true
      })
      this.storage.get('emailId').then(emailId=>{
       if(emailId!=null){
          this.credentials.emailId=emailId
        }
      })
   }


  async signIn(user:credentials){
   
   try{
     this.loader.present()
     //const loginSuccess=await this.afAuth.auth.signInWithEmailAndPassword(user.emailId,user.password);
    const loginSuccess=await this.afAuth.auth.signInWithEmailAndPassword('tony.manuel@mca.christuniversity.in','123456');
    
    
     if(loginSuccess){
            this.storage.set('emailId',user.emailId)
            //retrieve the user specific roles
            const privilleges=await this.firebase.database.ref(`users/${loginSuccess.user.uid}`).child('data').once('value')
           
            //check whether the user has changed the temporary password
            const tempPassword=await this.firebase.database.ref(`TempLogin/${loginSuccess.user.uid}`).once('value');
            // If user is signing in for first time then the user is redirected to change the temporary password
            if(tempPassword.val()==null)
              this.navCtrl.setRoot('ChangepasswordPage',{'existingUser':false})
            else
                
             this.navCtrl.setRoot('TabsPage',{'roles': privilleges.val()})
        }
    }catch(error){
      this.loader.dismiss()
      var errMsg = AppConst.FirebaseError.find(e=>e.code==error.code) 
      let toast=this.toastCtrl.create({
          message:errMsg.error,
          duration:5000,
        })
        toast.present()
       }//end of catch
      }//end of sign in function


 
 
    

     forgotPassword(){
     const modal = this.modalCtrl.create('ForgotpasswordPage');
     modal.present();
     

     }
  
}
