import { Component, ViewChild, KeyValueDiffers } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides, Form} from 'ionic-angular';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import {FormControl,FormGroup}from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';

import { InterviewDetailsPage } from '../interview-details/interview-details';
/**
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruitment',                          
  templateUrl: 'recruitment.html',
})
export class RecruitmentPage {
 
  recruitment:string;
  scheduleDate: String
  checked:boolean=false
 
  constructor(private firebase:AngularFireDatabase, private datePicker:DatePicker,public navCtrl: NavController) {
    this.recruitment="newApplicant";
    //this.dispApplicants();
  }

applicantRef:AngularFireList<any>;
scheduleRef:AngularFireList<any>;


dispApplicants(){
  this.applicantRef=this.firebase.list('Applicants');
  var result=[]
   this.firebase.database.ref("Applicants").on("value",function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
          if(!childSnapshot.hasChild("interviewDate")) {
              result.push({
                  $key:childSnapshot.key,
                ...childSnapshot.val()
              })
          }
          
      })
       
     
      });
    
   this.applicantArray=result;
    
}


applicantArray=[];


newApplicantForm=new FormGroup({
  $key:new FormControl(null),
  fName:new FormControl(''),
  lName:new FormControl(''),
  mobile:new FormControl(''),
  email:new FormControl(''),
  employer:new FormControl(''),
  noticePeriod:new FormControl(''),
  currentctc:new FormControl(''),
  experience:new FormControl(''),
  expectedctc: new FormControl('')
})
  
  saveApplicant(applicantDetails:any){
      
    this.applicantRef.push({
        fName:applicantDetails.fName,
        lName:applicantDetails.lName,
        mobile:applicantDetails.mobile,
        email:applicantDetails.email,
        employer:applicantDetails.employer,
        noticePeriod:applicantDetails.noticePeriod,
        currentctc:applicantDetails.currentctc,
        experience:applicantDetails.experience,
        expectedctc:applicantDetails.expectedctc
    })
  }//end of function

  onSubmit(){
    if(this.newApplicantForm.controls.$key.value==null){
      this.saveApplicant(this.newApplicantForm.value);
      this.newApplicantForm.reset();
    }
  }

  dispdate(){
    this.datePicker.show({
      date:new Date(),
      mode:'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date=>{
        this.scheduleForm.controls.scheduleDate.setValue(date.toLocaleDateString())
       
       },
      err => console.log('Error occurred while getting date: ', err)
    )
  }//end of function



  scheduleForm=new FormGroup({
      scheduleDate:new FormControl(''),
      scheduleTime:new FormControl(''),
      contactPerson:new FormControl(''),
      contactPersonNum: new FormControl(''),
      email: new FormControl('')
  });

 
  
  saveSchedule(){
    var i;
    var key;
    var schedule={  
                    interviewTime:this.scheduleForm.controls.scheduleTime.value, 
                    contactPerson:this.scheduleForm.controls.contactPerson.value,
                    contactNumber:this.scheduleForm.controls.contactPersonNum.value
                  }
      
                  
      this.scheduleRef=this.firebase.list('Schedules');
      this.scheduleRef.push({
        interviewDate:this.scheduleForm.controls.scheduleDate.value,
        interviewDetails:schedule
      }).then((snap) => {
        for(i=0;i<this.applicantKeys.length;i++)
        this.applicantRef.update(this.applicantKeys[i],{
            interviewDate:snap.key
            
        });
        
     });
     
   }//end of save schedule function
 
    
  
  selectAll(){
    this.checked=!this.checked;
  }

applicantKeys:string[] = [];
  clickSelectBox(itemKey){
    const foundAt = this.applicantKeys.indexOf(itemKey);
      if (foundAt >= 0) 
        this.applicantKeys.splice(foundAt, 1);
      else 
        this.applicantKeys.push(itemKey);
    }

 
interviewDate=[]
viewInterviewDates(){
    var result=[];
    this.firebase.database.ref("Schedules").on("value",function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
            
                result.push({
                 $key:childSnapshot.key,
                 ...childSnapshot.val()
                });

                return false;
        });
   });
         this.interviewDate=result;
        
}//end of function
  

otherPage(interviewDate){
  this.navCtrl.push(InterviewDetailsPage,{date:interviewDate});
}

  
}
