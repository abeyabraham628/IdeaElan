//Abey Abraham
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { resolve } from 'path';
import { AngularFireAuth } from '@angular/fire/auth';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { createHostListener } from '@angular/compiler/src/core';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
support:string
subjectErr:boolean=true
commentErr:boolean=true
recpErr:boolean=true
subject:string
matter:string
recipient:string
roles:any
user:any
filter:string
  constructor(public alertCtrl:AlertController,public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afAuth:AngularFireAuth) {
    this.support="newIssue"
    this.roles=navParams.data
    this.getUsers()
    this.userType(this.roles)
    this.getMyRequests()
    this.getSupportMessage()
    
    
    
  }

  ionViewDidLeave(){
    this.support="newIssue"
    this.resetFields()
    this.navCtrl.popToRoot()
  }
  
  employeeList=[]

  getUsers(){
    this.firebase.list(`users`).snapshotChanges().subscribe(list=>{
        this.employeeList=list.map(item=>{
          return{
             '$key':item.key,
            'fName':item.payload.child('fname').val(),
            'lName':item.payload.child('lname').val()
          }
        })
     })
  }
  contactSupport(){
    
    this.subject==null?this.subjectErr=false:this.subjectErr=true;
    this.matter==null||this.matter==""|| this.matter.length<5?this.commentErr=false:this.commentErr=true
    this.recipient==null?this.recpErr=false:this.recpErr=true
    
    if(this.subjectErr&& this.commentErr&& this.recpErr){
      let empObj=this.employeeList.find(key=>key.$key==this.afAuth.auth.currentUser.uid)
      let empName=empObj.fName+" "+empObj.lName
      this.firebase.list(`support`).push({
        subject:this.subject,
        matter:this.matter,
        recipient:this.recipient,
        userId:this.afAuth.auth.currentUser.uid,
        userName:empName,
        date:moment().format('D-MMM-YYYY'),
        time:moment().format('h:mm a'),
        status:'pending'
      }).then(()=>{
        let toast=this.toastCtrl.create({
            message:"Issue submitted successfully",
            duration:3000
        })
        toast.present()
        this.resetFields()
      })
    }
    

  }

  resetFields(){
    this.subject=this.recipient=this.matter=null
    this.recpErr=this.subjectErr=this.commentErr=true
  }

  myRequests=[]
  getMyRequests(){
    this.firebase.list('support',ref=>ref.orderByChild('userId').equalTo(`${this.afAuth.auth.currentUser.uid}`)).snapshotChanges().subscribe(snap=>{
        this.myRequests=snap.map(item=>{
          return{
            ...item.payload.val()
          }
        }).reverse()
    })
 }

  messages=[]
  supportMessage=[]
  getSupportMessage(){
    this.firebase.list(`support`,ref=>ref.orderByChild(`recipient`).equalTo(`${this.user}`)).snapshotChanges().subscribe(snap=>{
     this.supportMessage=snap.map(item=>{
       return{
         $key:item.key,
         ...item.payload.val()
       }
     }).reverse()
     this.messages=this.supportMessage
    })
    
   
  }
  
userType(roles){
  if(roles[0]=='value1')
    this.user="admin"
  else if(roles[4]=="value5")
    this.user="hr"
}

changeStatus(message){
  
  let alert = this.alertCtrl.create({enableBackdropDismiss: false});
  alert.setTitle("Subject: "+message.subject)
  alert.setSubTitle("From: "+message.userName)
  alert.setMessage("Issue: "+message.matter)
  
  
  alert.addInput({
    type: 'radio',
    label: "Under Review",
    value: "review"
});
alert.addInput({
  type: 'radio',
  label: "Closed",
  value: "closed"
});

 alert.addButton('Cancel');
 alert.addButton({
   text: 'OK',
   
   handler: data => {
    if(data!=null){
      this.firebase.list(`support`).update(message.$key,{
          status:data
      })
      
    }//end of if
    this.filter='all'
  } //end of handler  
})//end of ok button

 alert.present();
 
 }


 filterRequests(ctxt: string): void {
   if(ctxt!='all'){
    this.messages=this.supportMessage
    this.messages= this.supportMessage.filter(item => item.status === ctxt); 
   }else{
    this.messages=this.supportMessage
   }
}
 


}//end of class
