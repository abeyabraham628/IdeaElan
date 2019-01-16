import { Component , NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';

/**
 * Generated class for the ChatbotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var ApiAIPromises: any; 
@IonicPage()
@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html',
})
export class ChatbotPage {
  answer;
  constructor(public platform: Platform, public ngZone: NgZone,public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then(() => {
      ApiAIPromises.init({
        clientAccessToken: "26950d7a838f45e0b584e39ef33c7c47"
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

  


