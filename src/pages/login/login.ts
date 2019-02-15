import { async } from 'rxjs/scheduler/async';
import { credentials } from './../../providers/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth,private firebase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 

  async signIn(user:credentials){
   try{
      const result=await this.afAuth.auth.signInWithEmailAndPassword('tony@gmail.com','123456');
      let x:Promise<boolean>
      let y;



      /*if(result){
          
           
            this.firebase.database.ref('TempLogin').orderByChild(result.user.uid).once("value",(snapshot)=> {
            y=snapshot.val();
            Promise.resolve(true).then(()=>{
              if(y==null)
              this.navCtrl.setRoot('ChangepasswordPage')
             else
            this.navCtrl.setRoot('TabsPage')
          
            });
            })

           */ 
    }catch(e){
      console.error(e);
       }

       
   }
   
   signIn().then(()=.{
     
   })
  
     //end of sign in function
  
}
