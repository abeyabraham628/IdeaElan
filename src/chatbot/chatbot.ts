import { Component, NgZone } from '@angular/core';
//import { EmailComposerOriginal } from '@ionic-native/email-composer';
import { Platform } from 'ionic-angular';
import {  ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Events, Content } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';


declare var ApiAIPromises: any;

@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html'
})
export class ChatbotPage {
  answer;
  token:any;
  

  constructor(private fcm: FCM,public platform: Platform, public ngZone: NgZone) {
    
    
    this.fcm.getToken().then(token => {
      alert(token);
      console.log(token);
      this.token=token;
    });
    console.log(this.token);
    alert(this.token);
    platform.ready().then(() => {
      ApiAIPromises.init({
        clientAccessToken: "eefd359fd25447899a07c6e5404be212"
      }).then(result => console.log(result));
    });
    
  }
  
  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.answer = speech;
       });
    })
  }
}
/*



const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
exports.sendAdminNotification = functions.database.ref('users').onWrite((event :any)=> {


    
     const payload = {notification: {
         title: 'New news',
         body: 'hello'
         }
     };
return admin.messaging().sendToTopic("News",payload)
    .then(function(response :any){
         console.log('Notification sent successfully:',response);
    }) 
    .catch(function(error :any){
         console.log('Notification sent failed:',error);
    });
    
});
*/