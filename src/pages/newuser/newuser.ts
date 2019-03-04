import { AngularFireAuth} from '@angular/fire/auth';

import { userItem } from './../../models/user-item/user-item.interface';
import { Component,ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, ModalController } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Subscription } from 'rxjs/Subscription';


import * as keygen from 'generate-password';
import * as emailjs from 'emailjs-com';
import { CustomDatePicker } from '../../models/datepicker';
import { CalendarModal,CalendarResult} from "ion2-calendar";
import * as moment from 'moment'
import { Designations } from '../../providers/designations';
Designations

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})

export class NewuserPage {
  
  
  designations=Designations
  public itemslist: Array<any> = [];
 
 public items: Array<any> = [];
 public loaditems:Array<any>=[];
 //public itemRef: firebase.database.Reference = firebase.database().ref("/users/");
 public itemRef: firebase.database.Reference
  //@ViewChild('slider') slider:Slides;
  //@ViewChild(Slides) slides: Slides;

  userItemSubscription: Subscription;
  arrData=[];
  dnew=[];
  tmp:any;
  data:any ;
  chk:any;
  chk1:any;
   butn : any= "save";
   datas:any;
   sp:any;
  fame:any;
  glu:any;
  page=0;
  sss:any;
  testCheckboxOpen:any;
  testCheckboxResult:any;
  x:boolean = true;
  statuss:boolean=false;
  i:number=0
  v1:any=-1
  v2:any=0
  v3:any=0
  v4:any=0
  v5:any=0
  v6:any=0
  v7:any=0
  disa:any;
  status:string="active";
  isCheckeds :boolean
  users:String
  userItem = {} as userItem;
  userItemRef$: AngularFireList<userItem>

  icons:string="0";
  constructor(public navCtrl: NavController,private ref: ChangeDetectorRef, private fdb:AngularFireDatabase,public navParams: NavParams,public alertCtrl: AlertController,private customDatePicker:CustomDatePicker,private afAuth:AngularFireAuth,private modalCtrl:ModalController) {
   
   
    this.icons="0";
    this.users="newUser";
    this.itemRef= fdb.database.ref("/users/");
   
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
  this.x=true;
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
    this.ref.detectChanges();
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
 console.log("reason ",this.itemslist);
 console.log("reasonssss ",this.items);
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

  
  dispdate(type){
    let pickMode='single'
    let dateLimit=new Date().setDate(new Date().getDate()+45)// Display  45 days from today
    var defaultScrollTo=new Date()
     let disableWeek=[0,6]// disable Sunday-0 and Saturday-6
     
       let from=new Date('2/1/2019')
       var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from)
       
      let myCalendar =  this.modalCtrl.create(CalendarModal, {
       options: options,
       });
          
       myCalendar.present();
        
       myCalendar.onDidDismiss((date: CalendarResult[]) => {
        
         
         if(date!=null){
           if(type=="birth"){


             this.userItem.dob=moment(date['time']).format('D-MMM-YYYY')
           }
           else if(type=="join"){
             this.userItem.doj=moment(date['time']).format('D-MMM-YYYY')
           }
         
       }
      
      })//end of displayCalendar function
    }


 
  s( keys:any) {
    console.log(keys);
    this.userItemRef$.remove(keys);   
  }



 async btn(userItem: userItem){
  
  if(this.butn=="save")
  {
    var password=keygen.generate({
      length:6,
      symbols:false
  
    })
    this.sp=false;
    if(this.userItem.data==null){   
       
      this.dnew[0]="null";
      this.dnew[1]="null";
      this.dnew[2]="null";
      this.dnew[3]="null";
      this.dnew[4]="null";
      this.dnew[5]="null";
      this.dnew[6]="null";
    
    
  
    try{
      await this.afAuth.auth.createUserWithEmailAndPassword(this.userItem.email,password).then(data=>{
         
          const ref =  this.fdb.object(`users/${data.user.uid}`).set({
          key : data.user.uid,
          fname : this.userItem.fname,
          lname:this.userItem.lname,
          dob:this.userItem.dob,
          mobile:this.userItem.mobile,
          email:this.userItem.email,
          doj:this.userItem.doj,
          position:this.userItem.position,
          data:this.dnew,
          status:this.status
         }).then(()=>{
          
          this.fdb.list(`tokensNotificationId`).push({
          'userIdTocken': data.user.uid,
          'tokenid': "null"
          })
          });// end of push;// end of push
     });//end of create user
      this.email(this.userItem.fname, this.userItem.email,password)
      }catch(e){
        console.error(e)
      }
   }
  else{
    try{
      await this.afAuth.auth.createUserWithEmailAndPassword(this.userItem.email,password).then(data=>{
        
      const ref = this.fdb.object(`users/${data.user.uid}`).set({
        key : data.user.uid,
        fname : this.userItem.fname,
        lname:this.userItem.lname,
        dob:this.userItem.dob,
        mobile:this.userItem.mobile,
        email:this.userItem.email,
        doj:this.userItem.doj,
        position:this.userItem.position,
        data:this.userItem.data,
        status:this.status
      }).then(()=>{
          
        this.fdb.list(`tokensNotificationId`).push({
        'userIdTocken': data.user.uid,
        'tokenid': "null"
        
        })


      });// end of push;// end of push
    });//end of create user

    this.email(this.userItem.fname, this.userItem.email,password);
     }catch(e){
       console.error(e)
     }

    }// end of function


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
  console.log(this.userItem.data);
  //console.log(this.userItem.$key);
  if(this.statuss==true)
  {
    this.status="inactive";
  }
  else{
    this.status="active";
  }
    //this.fdb.object("/users/-LVIJAIZlMtJO4GVN1j5" )
  this.fdb.object("/users/"+this.userItem.$key)

 .update({ fname:this.userItem.fname, lname:this.userItem.lname,dob:this.userItem.dob,mobile:this.userItem.mobile,email:this.userItem.email,doj:this.userItem.doj,position:this.userItem.position,data:this.userItem.data,status:this.status});
 let alert = this.alertCtrl.create({
  title: "SUCCESS",
  subTitle: "Data has been updated succesfuly ",
  buttons: ['OK']
});

alert.present();
//this.sp.checked=false;
//this.sp.checked = false;
this.sp=false;
console.log("nadakunillaaa");
//console.log(this.sp.checked);
this.clear();
this.userItem.data=null;
this.butn="save";
this.x=true;
this.status="active";

}
}
collect(keys:any,fname:any,lname:any,dob:any,mobile:any,email:any,doj:any,position:any,data:any,status:any){
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
  this.chk=0;
  this.x=false;
  this.userItem.status=status;
  if(status!="active")
  {
    //console.log("inaaaaactiveeee",status);
  this.statuss=true;
  }
  else{
    this.statuss=false;
  }
  for( this.i=0;this.i<6;this.i++)
  {
    if(this.userItem.data[this.i]!="null")
    {
      this.chk=1;

    }
  }
  if(this.chk==1)
  {
  this.sp=true;
 // console.log("checkbox validation failed")
  }
 // console.log("reason 1",this.items);
  //console.log("reason 2",data);
  //console.log("reason",this.itemslist);
  
  //console.log("kerunundonn nokitha",this.userItem.data);
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
 //this.userItem.data="null";

}
showCheckbox(e:any,userItem: userItem) {
  
//console.log(this.datas);
//e.checked = true;

 //console.log("kerunillaa")
this.datas=this.userItem.data;
//console.log(this.datas);


if(this.datas!=null)//null allaaaaaa
{
  //console.log("kerunnuu");
//console.log("what comes in ");
//console.log(this.datas);
//console.log(this.v1);
for(this.i=0;this.i<=6;this.i++)
{
  if(this.datas[this.i]=="value1")
this.v1=0;
}
console.log("check1",this.v1);
for(this.i=0;this.i<=6;this.i++)
{
 if(this.datas[this.i]=="value2")
this.v2=1;
}
for(this.i=0;this.i<=6;this.i++)
{
  if(this.datas[this.i]=="value3")
this.v3=2;
}
for(this.i=0;this.i<=6;this.i++)
{
 if(this.datas[this.i]=="value4")
this.v4=3;
}
for(this.i=0;this.i<=6;this.i++)
{
  if(this.datas[this.i]=="value5")
this.v5=4;
}
for(this.i=0;this.i<=6;this.i++)
{
  if(this.datas[this.i]=="value6")
this.v6=5;
}
for(this.i=0;this.i<=6;this.i++)
{
  if(this.datas[this.i]=="value7")
this.v7=6;
}
//console.log("after condition check ");
//console.log(this.datas);
console.log(this.v1,this.v2,this.v3,this.v4,this.v5,this.v6,this.v7);
//-1 1 2 3 4 5 6 
//null 
if(this.v1==-1)
{
  this.datas[0]="null";
}
else 
{
  this.datas[0]="value1";
}
if(this.v2==0)
{
  this.datas[1]="null";
}
else 
{
  this.datas[1]="value2";
}
if(this.v3==0)
{
  this.datas[2]="null";
}
else 
{
  this.datas[2]="value3";
}
if(this.v4==0)
{
  this.datas[3]="null";
}
else 
{
  this.datas[3]="value4";
}
if(this.v5==0)
{
  this.datas[4]="null";
}
else 
{
  this.datas[4]="value5";
}9
if(this.v6==0)
{
  this.datas[5]="null";
}
else 
{
  this.datas[5]="value6";
}
if(this.v7==0)
{
  this.datas[6]="null";
}
else 
{
  this.datas[6]="value7";
}


//console.log(this.v1,this.v2,this.v3,this.v4,this.v5,this.v6,this.v7);
console.log('Cdatas look like  value :', this.datas);
 this.chk1=0;

//console.log(this.datas[0]=="value1"?false:true);
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
}
  if(e.checked)
{
 
  let alert = this.alertCtrl.create();
  alert.setTitle('Which are the privileges that you want to set to the user?');
//
  alert.addInput({
    type: 'checkbox',
    label: 'Admin',
    value: 'value1',
   checked:this.datas==null?false:this.datas[0]=="value1"?true:false
 
  });
 
  //console.log("hi");
  

  alert.addInput({
    type: 'checkbox',
    label: 'Leave Approvals',
    value: 'value2',
   // checked:this.datas[1]!="null"?this.datas[1]=="value2"?true:false:false
   checked:this.datas==null?false:this.datas[1]=="value2"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'View Policy',
    value: 'value3',
   // checked:this.datas[2]!="null"?this.datas[2]=="value3"?true:false:false
   checked:this.datas==null?false:this.datas[2]=="value3"?true:false
  });
  

  alert.addInput({
    type: 'checkbox',
    label: 'Send Message',
    value: 'value4',
    //checked:this.datas[3]!="null"?this.datas[3]=="value4"?true:false:false
    checked:this.datas==null?false:this.datas[3]=="value4"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'Recruitment',
    value: 'value5',
    //checked:this.datas[4]!="null"?this.datas[4]=="value5"?true:false:false
    checked:this.datas==null?false:this.datas[4]=="value5"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'System',
    value: 'value6',
   // checked:this.datas[5]!="null"?this.datas[5]=="value6"?true:false:false
   checked:this.datas==null?false:this.datas[5]=="value6"?true:false
  });
  
  alert.addInput({
    type: 'checkbox',
    label: 'Add Users ',
    value: 'value7',
   // checked:this.datas[6]!="null"?this.datas[6]=="value7"?true:false:false
   checked:this.datas==null?false:this.datas[6]=="value7"?true:false
  });

  alert.addButton({
    text:"cancel",
    handler: data => {
                      if(this.butn=="save"||this.butn=="update")
                                   {
                                     this.chk=0;
                                     this.chk1=0;
                                     if(this.userItem.data==null)
                                     {
                                     this.sp=false;
                                     console.log(" one ");
                                     }
                                     else{
                                       
                                       {
                                         
                                        for( this.i=0;this.i<6;this.i++)
                                        {
                                            if(this.userItem.data[this.i]=="null")
                                               {
                                              this.chk1=1;

                                              }
                                       }
                                           if(this.chk1==1)
                                              this.sp=false;
                                       }





                                          for( this.i=0;this.i<6;this.i++)
                                              {
                                                  if(this.userItem.data[this.i]!="null")
                                                     {
                                                    this.chk=1;

                                                    }
                                             }
                         if(this.chk==1)
                          this.sp=true;
                                            }
      }
      
    }
      
  });
  alert.addButton({
    text: 'Okay',
    handler: data => {
      
  
      
     // console.log("hui");
    //  console.log('data value  :', data);
      //this.userItem.data=this.datas;
     
     // this.datas=data;
    //  console.log(data[0]);
    //try1 
    if(data!=null)
    {
     // console.log("kerunnuu");
   // console.log("what comes in ");
   // console.log(data[6]);
   // console.log(this.v1);
  //  console.log(this.v2);
   // console.log(this.v3);
   // console.log(this.v4);
   // console.log(this.v5);
   // console.log(this.v6);
    //console.log(this.v7);
   // console.log(this.v7);

    
    for(this.i=0;this.i<=6;this.i++)
    {
      if(data[this.i]=="value1")
    this.v1=0;
    }
    //console.log("check1",this.v1);
    for(this.i=0;this.i<=6;this.i++)
    {
     if(data[this.i]=="value2")
    this.v2=1;
    }
    for(this.i=0;this.i<=6;this.i++)
    {
      if(data[this.i]=="value3")
    this.v3=2;
    }
    for(this.i=0;this.i<=6;this.i++)
    {
     if(data[this.i]=="value4")
    this.v4=3;
    }
    for(this.i=0;this.i<=6;this.i++)
    {
      if(data[this.i]=="value5")
    this.v5=4;
    }
    for(this.i=0;this.i<=6;this.i++)
    {
      if(data[this.i]=="value6")
    this.v6=5;
    }
    for(this.i=0;this.i<=6;this.i++)
    {
      if(data[this.i]=="value7")
    this.v7=6;
    }
    //console.log("after condition check ");
    //console.log(this.datas);
    //console.log(this.v1,this.v2,this.v3,this.v4,this.v5,this.v6,this.v7);
    //-1 1 2 3 4 5 6 
    //null 
    if(this.v1==-1)
    {
      data[0]="null";
    }
    else 
    {
      data[0]="value1";
    }
    if(this.v2==0)
    {
      data[1]="null";
    }
    else 
    {
      data[1]="value2";
    }
    if(this.v3==0)
    {
      data[2]="null";
    }
    else 
    {
      data[2]="value3";
    }
    if(this.v4==0)
    {
      data[3]="null";
    }
    else 
    {
      data[3]="value4";
    }
    if(this.v5==0)
    {
      data[4]="null";
    }
    else 
    {
      data[4]="value5";
    }9
    if(this.v6==0)
    {
      data[5]="null";
    }
    else 
    {
      data[5]="value6";
    }
    if(this.v7==0)
    {
      data[6]="null";
    }
    else 
    {
      data[6]="value7";
    }
  }
  this.userItem.data=data;
 // console.log("database:",data);
  
  //console.log("database:",data);
      this.testCheckboxOpen = true;
      this.testCheckboxResult = data;
      if(this.butn=="save"||this.butn=="update")
                                   {
                                     this.chk=0;
                                     this.chk1=0;
                                     if(this.userItem.data==null)
                                     {
                                       console.log("onen");
                                     this.sp=false;
                                     }
                                     else{
                                       
                                      {
                                        
                                       for( this.i=0;this.i<6;this.i++)
                                       {
                                           if(this.userItem.data[this.i]=="null")
                                              {
                                             this.chk1=1;

                                             }
                                      }
                                          if(this.chk1==1)
                                             this.sp=false;
                                             console.log("ones");
                                      }

                                      for( this.i=0;this.i<6;this.i++)
                                      {
                                          if(this.userItem.data[this.i]!="null")
                                             {
                                            this.chk=1;

                                            }
                                     }
                 if(this.chk==1)
                  this.sp=true;
                  console.log("trues");

                                    }
}
     // if(this.butn=="save")
        //  this.sp=false;
      //if(data==null)
     // this.sp=false;
     // data=null;
    }
  });

  alert.present();
  
  
  console.log('Cdatas value :', this.datas);

 
}

this.v1=-1;
this.v2=0;
this.v3=0;
this.v4=0;
this.v5=0;
this.v6=0;
this.v7=0;
}

new1()
{
  this.userItem.data=null;
  this.sp=false;
  this.x=true;
}


email(name:string,to_email:string,password:any){
console.log(name)
     var templateParams = {
      to_name: name,
      user_email:to_email,
      message_html: 'Your account login password is '+password+"."
    };
    emailjs.send('gmail','template_HIGzBk1x', templateParams, 'user_c9uZmGo3HwO81tbtd6fex')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
    }

    
    
}