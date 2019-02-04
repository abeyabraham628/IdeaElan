import { credentials } from './../../providers/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import * as keygen from 'generate-password';

 

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp() {
    // this.navCtrl.push(RegisterPage);
    console.log("das")
    this.navCtrl.push('TabsPage');

   }

    async signIn(user:credentials){
      var password = keygen.generate({
        length: 5,
        numbers: true
    });
    
  
    var server 	= email.server.connect({
       user:    "tonymanuel@ideaelan.com", 
       password:"9902771821", 
       host:    "smtp.gmail.com", 
       ssl:     true
    });
     
    // send the message and get a callback with an error or details of the message that was sent
    server.send({
       text:    "i hope this works", 
       from:    "tonymanuel@ideaelan.com", 
       to:      "tony.manuel@mca.christuniversity.in",
      // cc:      "else <else@your-email.com>",
       subject: "testing emailjs"
    }, function(err, message) { console.log(err || message); });
   /*try{
     const result=await this.afAuth.auth.signInWithEmailAndPassword('tonymanuel@ideaelan.com ','9902771821');

     if(result){
       this.navCtrl.setRoot('TabsPage')
     }
     }catch(e){
       console.error(e);
     }
*/

   }
  
}
