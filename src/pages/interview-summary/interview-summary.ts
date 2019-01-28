import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase,AngularFireList} from '@angular/fire/database'
/**
 * Generated class for the InterviewSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interview-summary',
  templateUrl: 'interview-summary.html',
})
export class InterviewSummaryPage {
eventDate:any
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebase:AngularFireDatabase) {
      this.eventDate=navParams.get('eventDate')
      this.interviewSummary(this.eventDate)
  }

  ionViewDidLoad() {
  //console.log('tony');
  }

  goBack(){
    this.navCtrl.pop();
  }


  
  selectedList=[]
  total_Count:number=0
  attended_Count:number=0
  selected_Count:number=0
  interviewSummary(eventDate:any){

    
      var result=[];
      var key:any
    
      this.firebase.database.ref("Schedules").orderByChild('interviewDate').equalTo(eventDate).on("value",function(snapshot) {
          key=Object.keys(snapshot.val())[0];
         
      });//end of Schedules reference
  
      this.firebase.database.ref("Applicants").orderByChild('interviewDate').equalTo(key).on("value",function(snapshot){
           
        
         snapshot.forEach(function(childSnapshot) {
          result.push({
           $key:childSnapshot.key,
           ...childSnapshot.val()
            })
            return false;
        });
         
    
         
    });//end of Applicants reference
     
      this.total_Count=result.length
      result.forEach(element => {
        if(element.interviewStatus=="selected"){
          this.selectedList.push(element)
          this.attended_Count+=1
        }
        else if(element.interviewStatus=="reported")
          this.attended_Count+=1
      });
      
  
    //this.applcantsData=result
  }//end of function


  
 
  



}
