import { Component, ViewChild, KeyValueDiffers,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides, Form, Item} from 'ionic-angular';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import {FormControl,FormGroup}from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';
import {Observable} from 'rxjs/observable'

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
 
  constructor(private firebase:AngularFireDatabase, private datePicker:DatePicker,public navCtrl: NavController,private ref: ChangeDetectorRef) {
    this.recruitment="newApplicant";
    this.getApplicants();
  }


applicantList:AngularFireList<any>;
scheduleList:AngularFireList<any>;


getApplicants(){
  this.applicantList=this.firebase.list('Applicants');
  return this.applicantList.snapshotChanges();
  };

  //
  getSchedules(){
    this.scheduleList=this.firebase.list('Schedules');
    return this.scheduleList.snapshotChanges();
    };
  
 
  applicantDetails=[];// for storing the applciants retrieved from db
  
  showApplicants(){
   this.getApplicants().subscribe(
     res=>{ 
       this.applicantDetails=res.map(item=>{
        if(!item.payload.hasChild('interviewDate'))//  retrieve the applicants who are not scheduled for an interview
         return {
          $key:item.key,
          ...item.payload.val()
         }
        else
         return null
      }).filter(Boolean);//end of map
 });//end of subscribe
}//end of show applicant function

//Initialising new applicant form
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
  
//Function for saving a new applicant to the database
  saveApplicant(applicantDetails:any){
    this.applicantList.push({
        fName:applicantDetails.fName,
        lName:applicantDetails.lName,
        mobile:applicantDetails.mobile,
        email:applicantDetails.email,
        employer:applicantDetails.employer,
        noticePeriod:applicantDetails.noticePeriod,
        currentctc:applicantDetails.currentctc,
        experience:applicantDetails.experience,
        expectedctc:applicantDetails.expectedctc
    });
  }//end of function


  onSubmit(){//submit function of save applicant form 
    if(this.newApplicantForm.controls.$key.value==null){
      this.saveApplicant(this.newApplicantForm.value);// function for saving the form data to the database
      this.newApplicantForm.reset();// reset applicant form after saving
    }
  }

  dispdate(){// Funciton for displaying the date picker for selecting interview date
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


  //Initialising schedule form
  scheduleForm=new FormGroup({
      scheduleDate:new FormControl(''),
      scheduleTime:new FormControl(''),
      contactPerson:new FormControl(''),
      contactPersonNum: new FormControl(''),
      email: new FormControl('')
  });

 
  //Funtion for saving interview schedules for the respective applicants
  saveSchedule(){
    let schedule={  
                    interviewTime:this.scheduleForm.controls.scheduleTime.value, 
                    contactPerson:this.scheduleForm.controls.contactPerson.value,
                    contactNumber:this.scheduleForm.controls.contactPersonNum.value
                  }
      
                  
      //Schedule details is pushed first to the db and then the key of that particular record is retrieved
      //Once the key is retrieved,that key is add as a reference to the interviewDate field for the selected candidated record. 
      
      this.scheduleList.push({//New schedule is created
        interviewDate:this.scheduleForm.controls.scheduleDate.value,
        interviewDetails:schedule
      }).then((snap) => {// call back function
        // Save the interviewDate for the candidates who are scheduled for interiew
        for(let i=0;i<this.applicantKeys.length;i++)
        this.applicantList.update(this.applicantKeys[i],{
            interviewDate:snap.key
            
        });
        
     });
    
   }//end of save schedule function
 
    
  // fucntion for toggling check all or uncheck all applicants
  selectAll(){
    this.checked=!this.checked;
  }

// Function for selecting multiple applincants before assigning a interview schedule
applicantKeys:string[] = [];
  clickSelectBox(itemKey){
    const foundAt = this.applicantKeys.indexOf(itemKey);
      if (foundAt >= 0) 
        this.applicantKeys.splice(foundAt, 1);
      else 
        this.applicantKeys.push(itemKey);
    }

// function for retrieving the history of schedules
interviewDate=[]
viewInterviewDates(){
    this.getSchedules().subscribe(
      res=>{
       this.interviewDate= res.map(item=>{
         return{ 
            $key:item.key,
            ...item.payload.val()}
        });//end of map
      });//end of subscribe
}//end of function
  

otherPage(interviewDate){
  this.navCtrl.push(InterviewDetailsPage,{date:interviewDate});
}


  
}
