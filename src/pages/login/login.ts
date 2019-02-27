import { async } from 'rxjs/scheduler/async';
import { credentials } from './../../providers/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';


 

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  credentials={} as credentials


  companyLogo:string="assets/imgs/companylogo.png"
  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth,private firebase:AngularFireDatabase) {
  }

  

 

  async signIn(user:credentials){
   
   try{
     // const result=await this.afAuth.auth.signInWithEmailAndPassword(user.emailId,user.password);
      const result=await this.afAuth.auth.signInWithEmailAndPassword('tony.manuel@mca.christuniversity.in','123456');
      let x:Promise<boolean>
      let y;
      var privilleges=[]
      
      const priv=await this.firebase.database.ref(`users/${result.user.uid}`).child('data').once('value',(snapshot)=>{
       privilleges=snapshot.val()
      
      })
     //console.log("resule",result.user.uid)
  
       
      if(result){
            await this.firebase.database.ref(`TempLogin/${result.user.uid}`).once("value",(snapshot)=> {
              y=snapshot.val();
              
            });

              if(y==null)
              this.navCtrl.setRoot('ChangepasswordPage')
              else
               this.navCtrl.setRoot('TabsPage',{'roles': privilleges})
               this.navCtrl.popToRoot();
          
            }
          

          
    }catch(e){
      alert(e);
       }
      }


 
 
     //end of sign in function

     forgotPassword(){
     const modal = this.modalCtrl.create('ForgotpasswordPage');
        modal.present();
     

     }
  
}
