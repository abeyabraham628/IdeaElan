import { map } from 'rxjs/operators';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {FormControl,FormGroup,Validators}from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Designations } from '../../providers/designations';

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

  this.PublishMessageForm.controls['date'].setValue(new Date().toLocaleDateString())
  this.PublishMessageForm.controls['time'].setValue(new Date().toLocaleTimeString())
  this.PublishMessageForm.controls['postedBy'].setValue(sender)
 
  for(let i=0;i<users.length;i++)
   this.firebase.list(`messages/${users[i]}`).push({
     'date':this.PublishMessageForm.controls['date'].value,
     'message':this.PublishMessageForm.controls['message'].value,
     'postedBy':this.PublishMessageForm.controls['postedBy'].value,
     'subject':this.PublishMessageForm.controls['subject'].value,
     'time':this.PublishMessageForm.controls['time'].value
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
      subTitle: "System updated succesfuly ",
      buttons: ['OK']
    });
    
    alert.present();
  
 
  }





 recipients=[]
 addRecipients(){
   
  let alert = this.alertCtrl.create();
  alert.setTitle('Choose Recipients');
  alert.addInput({
    type: 'checkbox',
    label: "All",
    value: "All"
});
  this.designations.forEach(item=>{
      alert.addInput({
         type: 'checkbox',
         label: item.position,
         value: item.value
    });
 })
 alert.addButton('Cancel');
 alert.addButton({
   text: 'OK',
   handler: data => {
    this.recipients = data;
    this.PublishMessageForm.controls['recipients'].setValue(data);
   }
 });

 alert.present();
 
 }


sentItems=[]
 getSentItems(){
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
  const alert = this.alertCtrl.create({
    title: "Subject: "+message.subject,
    subTitle:"Recipients: "+message.recipients,
    message:"Message: "+message.message,
    buttons: ['OK']
  });
  alert.present();
}
 




}
