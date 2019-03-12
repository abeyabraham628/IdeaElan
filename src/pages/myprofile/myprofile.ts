import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
 uri:any

  $key:any
  fName:  any
  lName:  any
  email:  any
  mobile: any
  dob:    any
  doj:    any
  jobTitle:any


  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afauth:AngularFireAuth) {
    this.retrieveProfile()
    this.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afauth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5`

  }

 

  retrieveProfile(){
    this.firebase.database.ref(`users/${this.afauth.auth.currentUser.uid}`).once('value',(snap)=>{
      this.$key=snap.key
      this.fName=snap.child('fname').val()
      this.lName=snap.child('lname').val()
      this.email=snap.child('email').val()
      this.mobile=snap.child('mobile').val()
      this.doj=snap.child('doj').val()
      this.dob=snap.child('dob').val()
      this.jobTitle=snap.child('position').val()
    })
  }

  updateProfile(){
    if(this.$key!="")
    this.firebase.list('users').update(this.$key,{
        fname:this.fName,
        lname:this.lName,
        mobile:this.mobile
    }).then(()=>{
        let toast=this.toastCtrl.create({
          message:'Profile updated successfully',
          duration:3000
        })
        toast.present()
    })
  }


}
