
import { DatePicker } from '@ionic-native/date-picker';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/auth';
import { userItem } from './../../models/user-item/user-item.interface';
import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController, ToastController } from 'ionic-angular';
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
  

  //VALIDATION PART 
  slideOneForm = new FormGroup({
    $key      :new FormControl(null),
    fname: new FormControl('',[Validators.required,Validators.minLength(1)]),
    lname: new FormControl('',[Validators.required,Validators.minLength(1)]),
    dob: new FormControl('',[Validators.required,Validators.minLength(5)]),
    mobile: new FormControl('',[Validators.required,Validators.minLength(9)]),
    doj: new FormControl('',[Validators.required,Validators.minLength(1)]),
    email: new FormControl('',[Validators.required,Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')] ),
    position: new FormControl('',[Validators.required,Validators.minLength(1)]),
   });

  
  
designations=Designations
public itemslist: Array<any> = [];
public items: Array<any> = [];
public loaditems:Array<any>=[];
public itemRef: firebase.database.Reference

arrData=[];
dnew=[];
data:any ;
chk:any;
chk1:any;
butn : any= "save";
datas:any;
sp:any;
fame:any;
page=0;
testCheckboxOpen:any;
testCheckboxResult:any;
x:boolean = true;
xy:boolean=true;
statuss:boolean=false;
i:number=0
v1:any=-1
v2:any=0
v3:any=0
v4:any=0
v5:any=0
v6:any=0
v7:any=0
list:boolean=false;
status:string="active";
isCheckeds :boolean
users:String
userItem = {} as userItem;

selectedPrivileges : any = ""
icons:string="0";
fnameShow:boolean=true;
loader:any


  constructor(public toastCtrl:ToastController,private datePicker:DatePicker,public loadingCtrl:LoadingController,public zone:NgZone,public navCtrl: NavController,private ref: ChangeDetectorRef, private fdb:AngularFireDatabase,public navParams: NavParams,public alertCtrl: AlertController,private customDatePicker:CustomDatePicker,private afAuth:AngularFireAuth,private modalCtrl:ModalController)
   {
    this.icons="0";
    this.users="newUser";
    this.itemRef= fdb.database.ref("/users/");
   }
  

ionViewDidLeave() {
  this.navCtrl.popToRoot();
}
    new() //METHOD WHEN ALL USERS PART IS TAPPED 
      {
        this.selectedPrivileges="";
        this.fnameShow=true;
        this.x=true;
            //LOADER
            this.loader=this.loadingCtrl.create({
            spinner:'dots',
            content:'Loading',
            dismissOnPageChange:true
            })
        this.loader.present()
        this.itemRef.on('value', itemSnapshot => {
        this.items = [];
            itemSnapshot.forEach( itemSnap => {
            this.items.push(itemSnap.val());
            return false;
           });
        this.itemslist=this.items;
        this.loaditems=this.items;
        //this.ref.detectChanges();
            });
        this.loader.dismiss();
        this.itemslist=this.items;         
        this.clear();
       this.butn="save";
       this.fnameShow=true;
        this.slideOneForm.reset();
        this.userItem.data=null;
        this.sp=false;
        this.x=true;
        this.selectedPrivileges="";

}

initializeItems(): void {
 this.itemslist = this.loaditems;
}

//SEARCHBAR
getItems(searchbar) {
  this.initializeItems();
  var q = searchbar.srcElement.value;
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
}


    dispdate(type:String){
      this.datePicker.show({
      date: moment().toDate(),
      mode: 'date',
      androidTheme: 5,
      
    }).then(
      date=>{
       if(type==="join"){
         this.userItem.doj = moment(date).format('D-MMM-YYYY')
       }
       else{
         this.userItem.dob =  moment(date).format('D-MMM-YYYY')
       }
     },err => console.log('Error occurred while getting date: ', err)

     );
    }






 async btn(userItem: userItem){
  
  if(this.butn=="save")
  {
    if (this.slideOneForm.get('fname').hasError('mobile') ||this.slideOneForm.get('fname').hasError('required') ||this.slideOneForm.get('email').hasError('required') ||this.slideOneForm.get('position').hasError('required') ||this.slideOneForm.get('doj').hasError('required') ||this.slideOneForm.get('dob').hasError('required') ||this.slideOneForm.get('lname').hasError('required'))
   {
    this.fnameShow=false;
    
  return;
   }
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
      let firebase=this.fdb
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
          }).then(async()=>{
            await firebase.database.ref(`AvailableLeaves/${moment().format('YYYY')}/${data.user.uid}`).once("value",function(snapshot) {
              /*If an employee is applying leave for the first time, then copy the 
                 leave rules set by to company to the employees record. Then a counter is created for the leaves taken in 
                 respective months/year. Eg  012019 means jan 2019*/
               if(snapshot.val()==null){
                 firebase.database.ref(`Leaves`).on("value",function(snapshot){// retrieving leave rules set by company
                 firebase.object(`AvailableLeaves/${moment().format('YYYY')}/${data.user.uid}`).set(snapshot.child(`${moment().format('YYYY')}`).val())/// copying leave rules to employee record
                 });
               }
              });//end of database.ref
          });// end of push;// end of push
     });//end of create user
      this.email(this.userItem.fname, this.userItem.email,password)
      }catch(e){
        //this.loader.dismiss()
     // var errMsg = AppConst.FirebaseError.find(e=>e.code==error.code) 
      var errMsg = e
      let toast=this.toastCtrl.create({
          message:errMsg.error,
          duration:5000,
        })
        toast.present()
      }
   }
  else{
    try{
      let firebase=this.fdb
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


      }).then(async()=>{
        await firebase.database.ref(`AvailableLeaves/${moment().format('YYYY')}/${data.user.uid}`).once("value",function(snapshot) {
          /*If an employee is applying leave for the first time, then copy the 
             leave rules set by to company to the employees record. Then a counter is created for the leaves taken in 
             respective months/year. Eg  012019 means jan 2019*/
           if(snapshot.val()==null){
             firebase.database.ref(`Leaves`).on("value",function(snapshot){
               // retrieving leave rules set by company
            firebase.object(`AvailableLeaves/${moment().format('YYYY')}/${data.user.uid}`).set(snapshot.child(`${moment().format('YYYY')}`).val())// copying leave rules to employee record
             });
           }
          });//end of database.ref
      });// end of push;// end of push
 });//end of create user
    this.email(this.userItem.fname, this.userItem.email,password);
     }catch(e){
      var errMsg = e
      let toast=this.toastCtrl.create({
          message:errMsg.error,
          duration:5000,
        })
        toast.present()
      
     }

    }// end of function


  let alert = this.alertCtrl.create({
    title: "SUCCESS",
    subTitle: "New User has been added succesfuly ",
    buttons: ['OK']
  });

  alert.present();

this.clear();
this.list=true
}
else
//UPDATION PART OF USER
{
 
  if (this.slideOneForm.get('fname').hasError('mobile') ||this.slideOneForm.get('fname').hasError('required') ||this.slideOneForm.get('email').hasError('required') ||this.slideOneForm.get('position').hasError('required') ||this.slideOneForm.get('doj').hasError('required') ||this.slideOneForm.get('dob').hasError('required') ||this.slideOneForm.get('lname').hasError('required'))
  {
   this.fnameShow=false;
   
 return;
  }


  if(this.statuss==true)
  {
    this.status="inactive";
  }
  else{
    this.status="active";
  }
  
  this.fdb.object("/users/"+this.userItem.$key)
 .update({ fname:this.userItem.fname, lname:this.userItem.lname,dob:this.userItem.dob,mobile:this.userItem.mobile,email:this.userItem.email,doj:this.userItem.doj,position:this.userItem.position,data:this.userItem.data,status:this.status});
 let alert = this.alertCtrl.create({
  title: "SUCCESS",
  subTitle: "Data has been updated succesfuly ",
  buttons: ['OK']
});
this.fnameShow=true;
alert.present();
this.sp=false;
this.clear();
this.list=true 
this.userItem.data=null;
this.butn="save";
this.x=true;
this.status="active";

}
}


collect(keys:any,fname:any,lname:any,dob:any,mobile:any,email:any,doj:any,position:any,data:any,status:any){
  this.slideOneForm.reset();
  this.userItem.fname=fname;
  this.userItem.lname=lname;
  this.userItem.mobile=mobile;
  this.userItem.dob=dob;
  this.userItem.doj=doj;
  this.userItem.email=email;
  this.userItem.position=position;
  this.userItem.$key=keys;
  this.selectedPrivileges="";
  this.userItem.data=null;
  this.userItem.data=data;
  
  this.butn="update";
  this.chk=0;
  this.x=false;
  this.userItem.status=status;
  this.list=false
  
 
  if(this.userItem.data[0]=="value1")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Admin , ";
  
  }
  if(this.userItem.data[1]=="value2")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Leave Approval , ";
  }
  if(this.userItem.data[2]=="value3")
  {
    this.selectedPrivileges=this.selectedPrivileges+" View Policy, ";
  }
  if(this.userItem.data[3]=="value4")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Send Message, ";
  }
  if(this.userItem.data[4]=="value5")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Recruitment , ";
  }
  if(this.userItem.data[5]=="value6")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Systems, ";
  }
  if(this.userItem.data[6]=="value7")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Add User, ";
  }
  
  if(status!="active")
  {
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
  }
 
  this.zone.run(()=>{
      this.users="newUser";
  })
  
}
clear(){
  this.userItem.fname="";
 this.userItem.lname="";
 this.userItem.mobile="";
 this.userItem.dob="";
 this.userItem.doj="";
 this.userItem.email="";
 this.userItem.position="";
 this.selectedPrivileges="";
 this.fnameShow=true;
  this.slideOneForm.reset();
  this.userItem.data=null; 
  this.sp=false;
  this.x=true;

}
showCheckbox(e:any,userItem: userItem) {

this.list=false
this.datas=null
this.v1=-1;
this.v2=this.v3=this.v4=this.v5=this.v6=this.v7=0;
this.datas=this.userItem.data;

if(this.datas!=null)//null allaaaaaa
{
  
for(this.i=0;this.i<=6;this.i++)
{
  if(this.datas[this.i]=="value1")
this.v1=0;
}
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

if(this.datas[0]=="value1"){

}
 this.chk1=0;
}
 
 
  let alert = this.alertCtrl.create();
  alert.setTitle('Privilleges');

  alert.addInput({
    type: 'checkbox',
    label: 'Admin',
    value: 'value1',
    handler:(e)=>{
      if(e.checked){
      for(let i=1;i<alert.instance['d'].inputs.length;i++)
        alert.instance['d'].inputs[i].checked=true
      }
      else{
      for(let i=1;i<alert.instance['d'].inputs.length;i++)
        alert.instance['d'].inputs[i].checked=false
      }
      
    },
   checked:this.datas==null?false:this.datas[0]=="value1"?true:false
 
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'Leave Approvals',
    handler:(e)=>{
     let count=0;
     if(!e.checked){
      alert.instance['d'].inputs[0].checked=false
     }
     for(let i=1;i<alert.instance['d'].inputs.length;i++)
     {
       if(alert.instance['d'].inputs[i].checked==true){
         count++;
       }
        
      }
      if(e.checked){
      
        if(count==6)
        {
          alert.instance['d'].inputs[0].checked=true;
         
        }
        
      }
     
      
    },
    value: 'value2',
   checked:this.datas==null?false:this.datas[1]=="value2"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'View Policy',
    handler:(e)=>{
      let count=0;
      if(!e.checked){
       alert.instance['d'].inputs[0].checked=false
      }
      for(let i=1;i<alert.instance['d'].inputs.length;i++)
      {
        if(alert.instance['d'].inputs[i].checked==true){
          count++;
        }
         
       }
       if(e.checked){
       
         if(count==6)
         {
           alert.instance['d'].inputs[0].checked=true;
         }
         
       }
      
       
     },
    value: 'value3',
   checked:this.datas==null?false:this.datas[2]=="value3"?true:false
  });
  

  alert.addInput({
    type: 'checkbox',
    label: 'Send Message',
    handler:(e)=>{
      let count=0;
      if(!e.checked){
       alert.instance['d'].inputs[0].checked=false
      }
      for(let i=1;i<alert.instance['d'].inputs.length;i++)
      {
        if(alert.instance['d'].inputs[i].checked==true){
          count++;
        }
         
       }
      
       if(e.checked){
       
         if(count==6)
         {
           alert.instance['d'].inputs[0].checked=true;
        
         }
         
       }
      
       
     },
    value: 'value4',
    checked:this.datas==null?false:this.datas[3]=="value4"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'Recruitment',
    handler:(e)=>{
      let count=0;
      if(!e.checked){
       alert.instance['d'].inputs[0].checked=false
      }
      for(let i=1;i<alert.instance['d'].inputs.length;i++)
      {
        if(alert.instance['d'].inputs[i].checked==true){
          count++;
        }
         
       }
       if(e.checked){
       
         if(count==6)
         {
           alert.instance['d'].inputs[0].checked=true;
         }
         
       }
      
       
     },
    value: 'value5',
    checked:this.datas==null?false:this.datas[4]=="value5"?true:false
  });
 
  alert.addInput({
    type: 'checkbox',
    label: 'System',
    handler:(e)=>{
      let count=0;
      if(!e.checked){
       alert.instance['d'].inputs[0].checked=false
      }
      for(let i=1;i<alert.instance['d'].inputs.length;i++)
      {
        if(alert.instance['d'].inputs[i].checked==true){
          count++;
        }
         
       }
       if(e.checked){
       
         if(count==6)
         {
           alert.instance['d'].inputs[0].checked=true;
         }
         
       }
      
       
     },
    value: 'value6',
   checked:this.datas==null?false:this.datas[5]=="value6"?true:false
  });
  
  alert.addInput({
    type: 'checkbox',
    label: 'Add Users ',
    handler:(e)=>{
      let count=0;
      if(!e.checked){
       alert.instance['d'].inputs[0].checked=false
      }
      for(let i=1;i<alert.instance['d'].inputs.length;i++)
      {
        if(alert.instance['d'].inputs[i].checked==true){
          count++;
        }
         
       }
       if(e.checked){
       
         if(count==6)
         {
           alert.instance['d'].inputs[0].checked=true;
         }
         
       }
      
       
     },
    value: 'value7',
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
      this.selectedPrivileges="";
    if(data!=null)
    {
    for(this.i=0;this.i<=6;this.i++)
    {
      if(data[this.i]=="value1")
    this.v1=0;
    }
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
  if(this.userItem.data[0]=="value1")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Admin , ";
  }
  if(this.userItem.data[1]=="value2")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Leave Approval , ";
  }
  if(this.userItem.data[2]=="value3")
  {
    this.selectedPrivileges=this.selectedPrivileges+" View Policy, ";
  }
  if(this.userItem.data[3]=="value4")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Send Message, ";
  }
  if(this.userItem.data[4]=="value5")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Recruitment , ";
  }
  if(this.userItem.data[5]=="value6")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Systems, ";
  }
  if(this.userItem.data[6]=="value7")
  {
    this.selectedPrivileges=this.selectedPrivileges+" Add User, ";
  }
      this.testCheckboxOpen = true;
      this.testCheckboxResult = data;
      if(this.butn=="save"||this.butn=="update")
                                   {
                                     this.chk=0;
                                     this.chk1=0;
                                     if(this.userItem.data==null)
                                     {
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

  alert.present();
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
  this.fnameShow=true;
  this.slideOneForm.reset();
  this.userItem.data=null;
  this.sp=false;
  this.x=true;
  this.selectedPrivileges="";
  this.butn="save";
}


email(name:string,to_email:string,password:any){
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