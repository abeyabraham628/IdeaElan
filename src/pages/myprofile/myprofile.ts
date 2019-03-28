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
    lName:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),

  })

  constructor(public data:DataService,public cache: Storage,public myModal:ModalController,public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afauth:AngularFireAuth) {
    this.retrieveProfile()
  
    //.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afauth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5${new Date().toLocaleTimeString()}`
    this.data.currentUri.subscribe(item=>this.uri=item)
  }

 

  retrieveProfile(){
    this.firebase.database.ref(`users/${this.afauth.auth.currentUser.uid}`).once('value',(snap)=>{
      this.profileForm.controls['$key'].setValue(snap.key)
      //$key=snap.key
    
      this.profileForm.get('fName').setValue(this.fName=snap.child('fname').val())
     this.profileForm.get('lName').setValue(this.lName=snap.child('lname').val())
     this.profileForm.get('mobile').setValue(this.mobile=snap.child('mobile').val())
      //$key=snap.key
      
      
     
      this.email=snap.child('email').val()
      
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

  public clearCache(){
    this.cache.clear();
    localStorage.clear();
 
  }

  showmodal()
  {
    console.log("hiiii");
    const mydata={
      uri :`${this.uri}`
    };
    const modal=this.myModal.create('ModalPage',{mydata});
    modal.onDidDismiss(() => {
     
     this.clearCache();
     this.clearCache;
     this.uri.clearCache;
     this.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afauth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5${new Date().toLocaleTimeString()}`
  
  });
    modal.present();
  }

}
