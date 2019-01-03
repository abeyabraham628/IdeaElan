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
  public itemslist: Array<any> = [];
 
 public items: Array<any> = [];
 public loaditems:Array<any>=[];
 //public itemRef: firebase.database.Reference = firebase.database().ref("/users/");
 public itemRef: firebase.database.Reference
  //@ViewChild('slider') slider:Slides;
  //@ViewChild(Slides) slides: Slides;

  userItemSubscription: Subscription;
  arrData=[];
   butn : any= "save";
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
      this.itemRef= firebase.database().ref("/users/");
   }
  
  ionViewDidLoad() {
  
  this.itemRef.on('value', itemSnapshot => {
    this.items = [];
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
      console.log(this.items);
      //console.log("HI");
      return false;
    });
    this.itemslist=this.items;
    //this.loaditems=this.items;
  });
  //new
  //this.itemslist=this.items;
  //this.loaditems=this.items;
  //console.log("START");
 // console.log(this.itemslist);
  //console.log("STOP");
  //console.log("START");
 // console.log(this.items);
 // console.log("STOP");
}
//new
new()
{
  console.log("NEW CALLED ");
  this.itemRef.on('value', itemSnapshot => {
    this.items = [];
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
      console.log(this.items);
      //console.log("HI");
      return false;
    });
    this.itemslist=this.items;
    this.loaditems=this.items;
  });
 
  console.log("PRINT ");
  console.log(this.itemslist);
  console.log("NEW ENDED");
  console.log("try1");
  this.itemslist=this.items;
  console.log(this.itemslist);
  console.log("try1 end");
  console.log(this.loaditems);

}

initializeItems(): void {
  //console.log(this.itemslist);
 this.itemslist = this.loaditems;
}
//new
getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.itemslist = this.itemslist.filter((v) => {
    if((v.position && q)||(v.fname && q)){
      if ((v.position.toLowerCase().indexOf(q.toLowerCase()) > -1)||(v.fname.toLowerCase().indexOf(q.toLowerCase()) > -1)) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.itemslist.length);
  
  console.log(this.itemslist);
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
  if(this.butn=="save")
  {
//this.glu = this.firebaseApp.database().ref().child("/child/").push().key;
const ref = this.fdb.list("users").query.ref.push(); ref.set({
  key : ref.key,
   
  fname : this.userItem.fname,
  lname:this.userItem.lname,
  dob:this.userItem.dob,
  mobile:this.userItem.mobile,
  email:this.userItem.email,
  doj:this.userItem.doj,
  position:this.userItem.position
  

}); console.log(ref.key);


  let alert = this.alertCtrl.create({
    title: "SUCCESS",
    subTitle: "New User has been added succesfuly ",
    buttons: ['OK']
  });

  alert.present();

this.clear();
}
else{
  //this.clear();
  //update code
  console.log("update try 1");
  console.log(this.userItem.fname);
  //console.log(this.userItem.$key);
    //this.fdb.object("/users/-LVIJAIZlMtJO4GVN1j5" )
  this.fdb.object("/users/"+this.userItem.$key)

 .update({ fname:this.userItem.fname, lname:this.userItem.lname,dob:this.userItem.dob,mobile:this.userItem.mobile,email:this.userItem.email,doj:this.userItem.doj,position:this.userItem.position});
 let alert = this.alertCtrl.create({
  title: "SUCCESS",
  subTitle: "Data has been updated succesfuly ",
  buttons: ['OK']
});

alert.present();

this.clear();
this.butn="save";
}
}
collect(keys:any,fname:any,lname:any,dob:any,mobile:any,email:any,doj:any,position:any){
  this.userItem.fname=fname;
  this.userItem.lname=lname;
  this.userItem.mobile=mobile;
  this.userItem.dob=dob;
  this.userItem.doj=doj;
  this.userItem.email=email;
  this.userItem.position=position;
  this.userItem.$key=keys;
  this.users="newUser";
  this.butn="update";
  /*this.slides.lockSwipes(false);
  this.slider.slideTo(0);
  this.slides.lockSwipes(true);*/
  
}
clear(){
  this.userItem.fname="";
 this.userItem.lname="";
 this.userItem.mobile="";
 this.userItem.dob="";
 this.userItem.doj="";
 this.userItem.email="";
 this.userItem.position="";
}

}
