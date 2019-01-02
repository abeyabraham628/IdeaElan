import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides,AlertController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import firebase from 'firebase';
/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {
  //Headername="users";
  @ViewChild('slider') slider:Slides;
  @ViewChild(Slides) slides: Slides;
  //@ViewChild("fname") ffname;
 
  arrData=[];
  fname:any;
  password:any;
  lname:any;
dob:any;
mobile:any;
email:any;
doj:any;
fame:any;
page=0;

icons:string="0";
  constructor(public navCtrl: NavController, private fdb:AngularFireDatabase,public navParams: NavParams,public alertCtrl: AlertController) {
    this.icons="0";
    this.fdb.list("/myitems/items/").valueChanges().subscribe( _data => {
      this.arrData= _data;
      console.log(this.arrData)
   }

    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
    this.slides.lockSwipes(true);
   var reportRef = firebase.database().ref("/myitems/").orderByKey();
    reportRef.on('child_added', function(data) {
    console.log(data.val().fname, data.val().lname);  
    console.log(data.val().fname);
    this.fname=data.val().fname;
   });

  }

  selectedTab(ind){
    this.slides.lockSwipes(false);
    this.slider.slideTo(ind);
    this.slides.lockSwipes(true);
  }

sasi(){
 // this.slider.slideTo(0);
 //this.slider.slideTo(1);
 //console.log(this.slider.getActiveIndex());
 //this.slides.slideTo(0);
 //this.selectedTab(1);
  //console.log("sasi");
}
btn(){
  //console.log(this.fname);
  //var reportRef = firebase.database().ref("/myitems/items").orderByKey();
  //reportRef.on('child_added', function(data) {
 // console.log(data.val().fname);  
  //console.log(data.val().fname);
  //this.fname=data.val().fname;
 //});
 //this.shoppingItemRef$.push({
  //itemName: this.shoppingItem.itemName,
  //itemNumber: Number(this.shoppingItem.itemNumber)
//});
  this.fdb.list("/users/").push({
    fname : this.fname,
    lname:this.lname,
    dob:this.dob,
    mobile:this.mobile,
    email:this.email,
    doj:this.doj

  });
    
    
    
   
  
  //this.fdb.list("/lname/").push(this.lname);
 //this.fdb.list("/dob/").push(this.dob);
 // this.fdb.list("/mobile/").push(this.mobile);
//this.fdb.list("/email/").push(this.email);
  //this.fdb.list("/doj/").push(this.doj);
  let alert = this.alertCtrl.create({
    title: "SUCCESS",
    subTitle: "New User has been added succesfuly ",
    buttons: ['OK']
  });

  alert.present();
 //this.fname="";
 this.lname="";
 this.mobile="";
 this.dob="";
 this.doj="";
 this.email="";
  
}
createPerson(fname: string, lname: string): void {
  const personRef: firebase.database.Reference = firebase.database().ref("/person1/");
  personRef.set({
    fname,
    lname
  })
}
}
