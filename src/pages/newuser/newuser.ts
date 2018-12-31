import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides,AlertController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
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
  @ViewChild("fname") ffname;
  arrData=[];
  fname:any;
  password:any;
  lname:any;
dob:any;
mobile:any;
email:any;
doj:any;
page=0;

icons:string="0";
  constructor(public navCtrl: NavController, private fdb:AngularFireDatabase,public navParams: NavParams,public alertCtrl: AlertController) {
    this.icons="0";
    this.fdb.list("/myitems/").valueChanges().subscribe( _data => {
      this.arrData= _data;
      console.log(this.arrData)
   }

    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruitmentPage');
    this.slides.lockSwipes(true);

   
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
  console.log(this.fname);
  this.fdb.list("/fname/").push(this.fname);
  
  this.fdb.list("/lname/").push(this.lname);
 this.fdb.list("/dob/").push(this.dob);
  this.fdb.list("/mobile/").push(this.mobile);
this.fdb.list("/email/").push(this.email);
  this.fdb.list("/doj/").push(this.doj);
  let alert = this.alertCtrl.create({
    title: "SUCCESS",
    subTitle: "New User has been added succesfuly ",
    buttons: ['OK']
  });

  alert.present();
 this.fname="";
 this.lname="";
 this.mobile="";
 this.dob="";
 this.doj="";
 this.email="";
  
}
}
