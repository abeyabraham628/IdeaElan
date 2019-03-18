import { Component , NgZone  } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';

/**
 * Generated class for the ChatbotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var ApiAIPromises: any;


@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html',
})
export class ChatbotPage {
 question:any
  constructor(public navCtrl: NavController, public navParams: NavParams , public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
      ApiAIPromises.init({
        clientAccessToken: "eefd359fd25447899a07c6e5404be212"
      }).then(result => console.log(result));
    });
   
  }

  ionViewDidLeave() {
    this.navCtrl.popToRoot();
  }
  
chat=[]
  questions=[]
  answer:any=[];
  ask(question) {
    this.chat.push({'question':question})
    
  
    
    ApiAIPromises.requestText({
      query: question
    }).then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.chat.push({'answer':speech});
        
       });

    })
    this.question="";
  }






}
