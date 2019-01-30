import { InterviewSummaryPage } from './../interview-summary/interview-summary';


//import { Firebase } from '@ionic-native/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController, Alert } from 'ionic-angular';
import{AngularFireDatabase,AngularFireList} from '@angular/fire/database'
import { FormsModule } from '@angular/forms';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase:AngularFireDatabase,public modalCtrl: ModalController,public alertCtrl:AlertController) {
    this.eventDate=navParams.get('date')
    this.loadApplicants(this.eventDate)
  }
  


  ionViewDidLoad() {
    
  }

  goBack() {
    this.navCtrl.pop();
  }

  applcantsData=[]
  loadApplicants(date:any){
    var result=[];
    var x:any
    this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(date).on("value",function(snapshot) {
        x=Object.keys(snapshot.val())[0];
    });//end of Schedules reference

    this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(x).on("value",function(snapshot){
      snapshot.forEach(function(childSnapshot) {
        result.push({
         $key:childSnapshot.key,
         ...childSnapshot.val()
          })
          return false;

       });
       
       
  });//end of Applicants reference
  this.applcantsData=[]
this.applcantsData=result
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
         this.firebase.list('Applicants').update(data.$key,{interviewStatus:status})
           
        }
      });
     
      statusAlert.setTitle(data.fName+" "+ data.lName);
      statusAlert.addButton('Cancel');
      statusAlert.present()
}


interviewSummary(eventDate:any){
       let summaryModal=this.modalCtrl.create(InterviewSummaryPage,{eventDate:eventDate})
       summaryModal.present();
}

}
