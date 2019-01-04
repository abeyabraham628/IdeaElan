import { userItem } from './../../models/user-item/user-item.interface';

import { Component,ViewChild, Input} from '@angular/core';
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
  tmp:any;
  data:any ;
   butn : any= "save";
   datas:any;
   sp:any;
  fame:any;
  glu:any;
  page=0;
  sss:any;
  testCheckboxOpen:any;
  testCheckboxResult:any;
  i:number=0
  v1:any=0
  v2:any=0
  v3:any=0
  v4:any=0
  v5:any=0
  v6:any=0
  v7:any=0
  users:String
   userItem = {} as userItem;
  userItemRef$: AngularFireList<userItem>

  icons:string="0";
  constructor(public navCtrl: NavController, private fdb:AngularFireDatabase,public navParams: NavParams,public alertCtrl: AlertController,private datePicker:DatePicker) {
      this.icons="0";
      this.users="newUser";
      this.itemRef= firebase.database().ref("/users/");
   }
  /*
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
} */
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
  this.clear();
  this.butn="save";

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
     },err => console.log('Error occurred while getting date: ', err)

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
  position:this.userItem.position,
  data:this.userItem.data

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

 .update({ fname:this.userItem.fname, lname:this.userItem.lname,dob:this.userItem.dob,mobile:this.userItem.mobile,email:this.userItem.email,doj:this.userItem.doj,position:this.userItem.position,data:this.userItem.data});
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
collect(keys:any,fname:any,lname:any,dob:any,mobile:any,email:any,doj:any,position:any,data:any){
  this.userItem.fname=fname;
  this.userItem.lname=lname;
  this.userItem.mobile=mobile;
  this.userItem.dob=dob;
  this.userItem.doj=doj;
  this.userItem.email=email;
  this.userItem.position=position;
  this.userItem.$key=keys;
  this.userItem.data=data;
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
 this.userItem.data=null;
}
showCheckbox(e:any,userItem: userItem) {
  


this.datas=['value1'];

this.datas=this.userItem.data;
for(this.i=0;this.i<7;this.i++)
{
  this.datas[this.i]=="value1";
this.v1=0;
}
for(this.i;this.i<7;this.i++)
{
  this.datas[this.i]=="value2";
this.v2=1;
}
for(this.i;this.i<7;this.i++)
{
  this.datas[this.i]=="value3";
this.v3=2;
}
for(this.i;this.i<7;this.i++)
{
  this.datas[this.i]=="value4";
this.v4=3;
}
for(this.i;this.i<7;this.i++)
{
  this.datas[this.i]=="value5";
this.v5=4;
}
for(this.i;this.i<7;this.i++)
{
  this.datas[this.i]=="value6";
this.v6=5;
}
for(this.i;this.i<7;this.i++)
{
  this.datas[this.i]=="value7";
this.v7=6;
}

if(this.v1==0)
{
  this.datas[this.v1]="null";
}
if(this.v2==0)
{
  this.datas[this.v2]="null";
}
if(this.v3==0)
{
  this.datas[this.v3]="null";
}
if(this.v4==0)
{
  this.datas[this.v4]="null";
}
if(this.v5==0)
{
  this.datas[this.v5]="null";
}
if(this.v6==0)
{
  this.datas[this.v6]="null";
}
if(this.v7==0)
{
  this.datas[this.v7]="null";
}
//this.datas=['value1'];
/*if(this.datas!=null){
  for(this.i=0;this.i<7;this.i++){
   if(this.datas[this.i]=="value1"){this.v1=true}
    if(this.datas[this.i]=="value2"){this.v2=true}
    if(this.datas[this.i]=="value3"){this.v3=true}
    if(this.datas[this.i]=="value4"){this.v4=true}
    if(this.datas[this.i]=="value5"){this.v5=true}
    if(this.datas[this.i]=="value6"){this.v6=true}
    if(this.datas[this.i]=="value7"){this.v7=true}
    
  }
  }
//console.log("c "+this.datas[0]);
*/
  if(e.checked)
{
 
  let alert = this.alertCtrl.create();
  alert.setTitle('Which are the privileges that you want to set to the user?');
//
  alert.addInput({
    type: 'checkbox',
    label: 'Admin',
    value: 'value1',
   checked:this.datas[0]=="value1"?true:false
 
  });
 
  console.log("hi");
  

  alert.addInput({
    type: 'checkbox',
    label: 'Leave Approvals ',
    value: 'value2',
   // checked:this.datas[1]!="null"?this.datas[1]=="value2"?true:false:false
   checked:this.datas[1]=="value2"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'Holiday List Upload',
    value: 'value3',
   // checked:this.datas[2]!="null"?this.datas[2]=="value3"?true:false:false
   checked:this.datas[2]=="value3"?true:false
  });
  

  alert.addInput({
    type: 'checkbox',
    label: 'Payslip Upload',
    value: 'value4',
    //checked:this.datas[3]!="null"?this.datas[3]=="value4"?true:false:false
    checked:this.datas[3]=="value4"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'Recruitment',
    value: 'value5',
    //checked:this.datas[4]!="null"?this.datas[4]=="value5"?true:false:false
    checked:this.datas[4]=="value5"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'System',
    value: 'value6',
   // checked:this.datas[5]!="null"?this.datas[5]=="value6"?true:false:false
   checked:this.datas[5]=="value6"?true:false
  });
  
  alert.addInput({
    type: 'checkbox',
    label: 'Add Users ',
    value: 'value7',
   // checked:this.datas[6]!="null"?this.datas[6]=="value7"?true:false:false
   checked:this.datas[6]=="value7"?true:false
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'Okay',
    handler: data => {
      console.log("hui");
      console.log('data value  :', data);
      this.userItem.data=data;
     // this.datas=data;
    //  console.log(data[0]);
      this.testCheckboxOpen = true;
      this.testCheckboxResult = data;
    }
  });
  alert.present();
  console.log('Cdatas value :', this.datas);
  
///
}
}
}
