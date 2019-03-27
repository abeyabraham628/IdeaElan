


//import { Firebase } from '@ionic-native/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController, Alert } from 'ionic-angular';
import{AngularFireDatabase,AngularFireList} from '@angular/fire/database'



/**
 * Generated class for the InterviewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interview-details',
  templateUrl: 'interview-details.html',
})
export class InterviewDetailsPage {
  eventDate:any
  eventKey:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase:AngularFireDatabase,public modalCtrl: ModalController,public alertCtrl:AlertController) {
    this.eventDate=navParams.get('date')
    this.eventKey=navParams.get('key')
    this.loadApplicants(this.eventKey)
    
  }
  


 

  goBack() {
    this.navCtrl.pop();
  }

  applicantsData:any
 async loadApplicants(key:any){
    this.applicantsData=[]
    var result=[]
    var x:any
    /*this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(date).on("value",function(snapshot) {
        x=Object.keys(snapshot.val())[0];
    });//end of Schedules reference*/

     await this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(key).once("value",function(snapshot){
     
    
      snapshot.forEach(function(childSnapshot) {
         result.push({
         $key:childSnapshot.key,

         ...childSnapshot.val()
          })
          return false;
     });
 });//end of Applicants reference

this.applicantsData=result

}//end of function

status:any
changeStatus(data:any){
 let statusAlert=this.alertCtrl.create()
      statusAlert.addInput({
        type: 'radio',
        label: 'Reported',
        value: 'reported',
        checked: false
      });
      statusAlert.addInput({
        type: 'radio',
        label: 'Selected',
        value: 'selected',
        checked: false
      });

      statusAlert.addButton({
        text: 'OK',
        handler: status => {
          if(status!=null){
         this.firebase.list('Applicants').update(data.$key,{interviewStatus:status})
          this.loadApplicants(this.eventKey)
          }
        }
      });
     
      statusAlert.setTitle(data.fName+" "+ data.lName);
      statusAlert.addButton('Cancel');
      statusAlert.present()
}


interviewSummary(eventKey:any,eventDate:any){
  

    this.navCtrl.push('InterviewSummaryPage',{eventDate:eventDate,eventKey:eventKey})
       
}

}
