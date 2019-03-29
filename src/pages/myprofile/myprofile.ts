import { DataService } from './../../providers/form-service';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';

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

  profileForm=new FormGroup({
    $key:new FormControl(null),
    fName:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)]),
    lName:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)]),
    mobile:new FormControl('', [Validators.required, Validators.pattern('^([6-9])([0-9]{9})$'), Validators.minLength(10)]),
   
  })

  constructor(public data:DataService,public cache: Storage,public myModal:ModalController,public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afauth:AngularFireAuth) {
    this.retrieveProfile()
  
    //.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afauth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5${new Date().toLocaleTimeString()}`
    this.data.currentUri.subscribe(item=>this.uri=item)
  }

 

  retrieveProfile(){
    this.firebase.database.ref(`users/${this.afauth.auth.currentUser.uid}`).on('value',(snap)=>{
    this.profileForm.controls['$key'].setValue(this.$key=snap.key)
    this.profileForm.get('fName').setValue(this.fName=snap.child('fname').val())
    this.profileForm.get('lName').setValue(this.lName=snap.child('lname').val())
    this.profileForm.get('mobile').setValue(this.mobile=snap.child('mobile').val())
    this.email=snap.child('email').val()
    this.doj=snap.child('doj').val()
    this.dob=snap.child('dob').val()
    this.jobTitle=snap.child('position').val()
    })
  }

 
  updateProfile(){
  if(this.profileForm.valid){
    if(this.$key!="")
      this.firebase.list('users').update(this.$key,{
          fname: this.profileForm.get('fName').value,
          lname:this.profileForm.get('lName').value,
          mobile:this.profileForm.get('mobile').value
      }).then(()=>{
          let toast=this.toastCtrl.create({
            message:'Profile updated successfully',
            duration:3000
          })
          toast.present()
      })
    }
  }

 

  showmodal()
  {
    console.log("hiiii");
    const mydata={
      uri :`${this.uri}`
    };
    const modal=this.myModal.create('ModalPage',{mydata});
    modal.onDidDismiss(() => {
     
     this.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afauth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5${new Date().toLocaleTimeString()}`
  
  });
    modal.present();
  }

}
