import { map, count } from 'rxjs/operators';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {FormControl,FormGroup,Validators}from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Designations } from '../../providers/designations';
import * as moment from 'moment'
import { tokenKey } from '@angular/core/src/view';

/**
 * Generated class for the UploadEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-events',
  templateUrl: 'upload-events.html',
})
export class UploadEventsPage {


  designations=Designations
  messages:string
  loader:any

  constructor(public loadingCtrl:LoadingController,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afauth:AngularFireAuth) {
    this.messages="compose"
  }

  ionViewDidLeave() {
    this.navCtrl.popToRoot();
  }
 

  PublishMessageForm=new FormGroup({
    subject:new FormControl('',[Validators.required]),
    message:new FormControl('',[Validators.required]),
    recipients:new FormControl('',[Validators.required]),
    postedBy:new FormControl(''),
    time:new FormControl(''),
    date:new FormControl(''),

});

async publishMessage(){
 let sentTo=this.recipients
  let users=[]
  let sender:string
  await this.firebase.database.ref(`users/${this.afauth.auth.currentUser.uid}`).once('value',(snap)=>{
         sender=(snap.child('fname').val()+" "+snap.child('lname').val())
  })

  await this.firebase.database.ref(`users`).once('value',(snap)=>{
    
     snap.forEach(function(childSnapshot) {
      if(childSnapshot.child('status').val()==="active"){
        for(let i=0;i<sentTo.length;i++)
          if(sentTo[i]=="All"){
            users.push(childSnapshot.key)
          }
        else{
          if(childSnapshot.child('position').val()===sentTo[i])
              users.push(childSnapshot.key)
          }
        }
      });
})

  this.PublishMessageForm.controls['date'].setValue(moment().format('D-MMM-YYYY'))
  this.PublishMessageForm.controls['time'].setValue(moment().format('h:mm a'))
  this.PublishMessageForm.controls['postedBy'].setValue(sender)
 
  for(let i=0;i<users.length;i++)
   this.firebase.list(`messages/${users[i]}`).push({
     'date':this.PublishMessageForm.controls['date'].value,
     'message':this.PublishMessageForm.controls['message'].value,
     'postedBy':this.PublishMessageForm.controls['postedBy'].value,
     'subject':this.PublishMessageForm.controls['subject'].value,
     'time':this.PublishMessageForm.controls['time'].value,
     'status':'unread'
   })

    this.firebase.list(`sentmessages/${this.afauth.auth.currentUser.uid}`).push({
      'recipients':this.recipients,
      'date':this.PublishMessageForm.controls['date'].value,
     'message':this.PublishMessageForm.controls['message'].value,
     'subject':this.PublishMessageForm.controls['subject'].value,
     'time':this.PublishMessageForm.controls['time'].value
    })

    let alert = this.alertCtrl.create({
      title: "Success",
      subTitle: "Message Sent Successfully",
      buttons: ['OK']
    });
    
    alert.present();
  
    this.PublishMessageForm.reset()
  }





 recipients=[]
 addRecipients(){
   
  let allSelected:boolean
  let alert = this.alertCtrl.create();
  
  alert.setTitle('Choose Recipients');
  alert.addInput({
    type: 'checkbox',
    label: "All",
    value:'All',
    handler:(x)=>{
    if(x.checked){
        allSelected=true
      for(let i=1;i<alert.data.inputs.length;i++)
        alert.data.inputs[i].checked=true
      }
      else{
        allSelected=false
      for(let i=1;i<alert.data.inputs.length;i++)
        alert.data.inputs[i].checked=false
      }
      
    }
});

  this.designations.forEach((item)=>{
      alert.addInput({
         type: 'checkbox',
         label: item.position,
         value: item.value,
         checked:false,
        handler:()=>{
         
          allSelected=false
          alert.data.inputs[0].checked=false
          
        }
    });
 })
 alert.addButton('Cancel');
 alert.addButton({
   text: 'OK',
   handler: data => {
          if(data=="" || data==null){
            this.recipients = data;
            this.PublishMessageForm.controls['recipients'].setValue(this.recipients);
          }
          else if(allSelected){
              data='All'
              this.recipients = data;
              this.PublishMessageForm.controls['recipients'].setValue(this.recipients);
            }
          else{
            this.recipients = data;
            this.PublishMessageForm.controls['recipients'].setValue(this.recipients);

          }

   }//end of handler function
 });
//Conditions to enable tick for the checkbox when displaying the alert.
 if(this.recipients.length>0){
   if(this.recipients.toString()=='All'){
    for(let i=0;i<alert.data.inputs.length;i++){//Check all fields is the the array contains 'All'
      alert.data.inputs[i].checked=true
    }
  }
  else{
    for(let i=0;i<alert.data.inputs.length;i++){  // Compare the all degsignations with the selected recipients. If  deisgnation mathches with the recipient the check that field. This function is user to load the already selected recipients
      for(let j=0;j<this.recipients.length;j++)
      if(alert.data.inputs[i].value==this.recipients[j])
        alert.data.inputs[i].checked=true
    }
  }
}
 alert.present();
 }




sentItems=[]
 getSentItems(){
  this.PublishMessageForm.reset()
  this.loader=this.loadingCtrl.create({
    spinner:'dots',
    content:'Loading',
     dismissOnPageChange:true
   })
  this.loader.present()
    this.firebase.list(`sentmessages/${this.afauth.auth.currentUser.uid}`).snapshotChanges().subscribe(snap=>{
        this.sentItems=snap.map(items=>{
          return{
            $key:items.key,
            ...items.payload.val()
          }
        }).reverse()
    })
    this.loader.dismiss()  
 }


 viewMessage(message) {
 let  alert = this.alertCtrl.create();
    alert.setTitle("Subject: "+message.subject)
    alert.setSubTitle("Recipients: "+message.recipients)
    alert.setMessage("Message: "+message.message)
    alert.addButton('OK')
  
  alert.present();
}
 




}
