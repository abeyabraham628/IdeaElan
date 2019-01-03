import { userItem } from './../../models/user-item/user-item.interface';

import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides,AlertController } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import firebase from 'firebase';

import { Subscription } from 'rxjs/Subscription';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FirebaseApp } from 'angularfire2';
import { DatePicker } from '@ionic-native/date-picker';



@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})

export class NewuserPage {

 
 public items: Array<any> = [];
 public itemRef: firebase.database.Reference = firebase.database().ref("/users/");
  
  //@ViewChild('slider') slider:Slides;
  //@ViewChild(Slides) slides: Slides;

  userItemSubscription: Subscription;
  arrData=[];

  fame:any;
  glu:any;
  page=0;
  sss:any;
  users:String
   userItem = {} as userItem;
  userItemRef$: AngularFireList<userItem>

  icons:string="0";
  constructor(public navCtrl: NavController, private fdb:AngularFireDatabase,public navParams: NavParams,public alertCtrl: AlertController,private datePicker:DatePicker) {
      this.icons="0";
      this.users="newUser";
   }
  
  ionViewDidLoad() {
  
  this.itemRef.on('value', itemSnapshot => {
    this.items = [];
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
      console.log(this.items);
      return false;
    });
  });
}

  
 
  
  /*selectedTab(index:number){
    this.slider.slideTo(index);

  }*/
  
  dispdate(type:String){
      this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date=>{
       if(type==="join"){
         this.userItem.doj = new Date(date).toLocaleDateString()
       }
       else{
         this.userItem.dob = new Date(date).toLocaleDateString()
       }
     }
     );
    }


 
  s( keys:any) {
    console.log(keys);
    this.userItemRef$.remove(keys);   
  }



btn( userItem: userItem){
//this.glu = this.firebaseApp.database().ref().child("/child/").push().key;
const ref = this.fdb.list("users").query.ref.push(); ref.set({
  key : ref.key,
   
  fname : this.userItem.fname,
  lname:this.userItem.lname,
  dob:this.userItem.dob,
  mobile:this.userItem.mobile,
  email:this.userItem.email,
  doj:this.userItem.doj
  

}); console.log(ref.key);


  let alert = this.alertCtrl.create({
    title: "SUCCESS",
    subTitle: "New User has been added succesfuly ",
    buttons: ['OK']
  });

  alert.present();

 this.userItem.fname="";
 this.userItem.lname="";
 this.userItem.mobile="";
 this.userItem.dob="";
 this.userItem.doj="";
 this.userItem.email="";
  
}
collect(keys:any,fname:any,lname:any,dob:any,mobile:any,email:any,doj:any){
  this.userItem.fname=fname;
  this.userItem.lname=lname;
  this.userItem.mobile=mobile;
  this.userItem.dob=dob;
  this.userItem.doj=doj;
  this.userItem.email=email;
  this.users="newUser";
  /*this.slides.lockSwipes(false);
  this.slider.slideTo(0);
  this.slides.lockSwipes(true);*/
  
}


}
