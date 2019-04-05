//Tony Manuel
import { Component,ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, ToastController, Content } from 'ionic-angular';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import {FormControl,FormGroup,Validators}from '@angular/forms';
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
  @ViewChild(Content) content: Content;

  recruitment:string;
  scheduleDate: String
  checked:boolean=false
 
  searchString:string
  searchInterview:string
  showDelete:boolean=false
  showFooter:boolean=false
  applicantsErr:boolean=false
  applicantKeys:string[]=[]
  constructor(public toastCtrl:ToastController,public loadingCtrl:LoadingController,public alertCtrl:AlertController,private firebase:AngularFireDatabase,public navCtrl: NavController,private ref: ChangeDetectorRef) {
    this.recruitment="newApplicant";
    this.getApplicants();
    this.showApplicants()
  }

  ionViewDidEnter() {
    this.applicantKeys=[]
    this.applicantsErr=false
  }

applicantList:AngularFireList<any>;
scheduleList:AngularFireList<any>;


getApplicants(){
  this.applicantList=this.firebase.list('Applicants');
  return this.applicantList.snapshotChanges();
  };

  //
  getSchedules(){
    this.scheduleList=this.firebase.list('schedules');
    return this.scheduleList.snapshotChanges();
   };
  
 
  applicantDetails=[];// for storing the applciants retrieved from db
  x:boolean=true
  showApplicants(){
   
    let loader=this.loadingCtrl.create({
      spinner:'dots',
      content:'Loading',
       dismissOnPageChange:true
     })
     loader.present()
    this.newApplicantForm.reset();
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
      loader.dismiss()
      this.content.resize()
 });//end of subscribe


}//end of show applicant function

//Initialising new applicant form
newApplicantForm=new FormGroup({
  $key:new FormControl(null),
  fName:new FormControl('',[Validators.required,Validators.minLength(2)]),
  lName:new FormControl('',Validators.required),
  mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
  email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  employer:new FormControl('',[Validators.required,Validators.minLength(3)]),
  noticePeriod:new FormControl('',[Validators.required,Validators.minLength(5)]),
  currentctc:new FormControl('',[Validators.required,Validators.minLength(4)]),
  experience:new FormControl('',Validators.required),
  expectedctc: new FormControl('',[Validators.required,Validators.minLength(4)]),
  
})
  
//Function for saving a new applicant to the database
  saveApplicant(applicantDetails:any){
    let loader=this.loadingCtrl.create({
      spinner:'dots',
      dismissOnPageChange:true
     })
     loader.present()
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
    }).then(()=>{
      loader.dismiss()
      let alert = this.alertCtrl.create({
        title: "Success",
        subTitle: "Applicant added succesfuly ",
        buttons:[{
          text:"Ok",
          handler:()=>{ this.showDelete=false;this.newApplicantForm.reset();}
        }]
      });
      
      alert.present();
    });
  }//end of function

  editCandidate(obj){
    this.showFooter=false
    this.content.resize()
    this.newApplicantForm.setValue(obj);
    this.recruitment="newApplicant"
    this.showDelete=true
  }


  updateApplicant(applicantDetails:any){
    let loader=this.loadingCtrl.create({
      spinner:'dots',
      
       dismissOnPageChange:true
     })
     loader.present()
    this.applicantList.update(applicantDetails.$key,{
        fName:applicantDetails.fName,
        lName:applicantDetails.lName,
        mobile:applicantDetails.mobile,
        email:applicantDetails.email,
        employer:applicantDetails.employer,
        noticePeriod:applicantDetails.noticePeriod,
        currentctc:applicantDetails.currentctc,
        experience:applicantDetails.experience,
        expectedctc:applicantDetails.expectedctc
    }).then(()=>{
      loader.dismiss()
      let alert = this.alertCtrl.create({
        title: "Success",
        subTitle: "Applicant Updated succesfuly ",
        buttons:[{
          text:"Ok",
          handler:()=>{ this.showDelete=false;this.newApplicantForm.reset();}
        }]
      });
      
      
      alert.present();
     
      
    });
    
  }//end of function

  disableFooter(){
    this.showFooter=false
    this.content.resize()
    this.applicantKeys=[]
  }
  enableFooter(){
    this.showFooter=true
    this.content.resize()
    this.resetApplciantForm()
  }

  deleteApplicant(){
    let alert=this.alertCtrl.create({
      title:'Confirm',
      message:'Do you want to delete this applicant',
      buttons:[
        {
        text:"Yes",
        handler:()=>{
          this.applicantList.remove(this.newApplicantForm.controls['$key'].value)
          let toast=this.toastCtrl.create({
            message:'Applicant deteled successfully',
            duration:3000
          })
          toast.present()
          this.resetApplciantForm()
        }
      },
      {
        text:'No',
        handler: () => {}
  
      }
    ]
    })
    alert.present()
  }
  

  onSubmit(){//submit function of save applicant form 
    if(this.newApplicantForm.controls.$key.value==null){
      this.saveApplicant(this.newApplicantForm.value);// function for saving the form data to the database
     
    }
    else{
      this.updateApplicant(this.newApplicantForm.value);// function for saving the form data to the database
    }
  }

  resetApplciantForm(){
    
    this.newApplicantForm.reset()
    this.showDelete=false// hide the delete button
    
  }

  


 

 
  //Funtion for saving interview schedules for the respective applicants
  
 
    
  // fucntion for toggling check all or uncheck all applicants
  checkAll:boolean=false
  selectAll(){
    if(this.checkAll)
    this.checked=true;
    else
      this.checked=false

      
   
  }

  gotoCreateSchedule(){
    if(this.applicantKeys.length<1)
      this.applicantsErr=true
      else
        this.navCtrl.push('InterviewSchedulePage',this.applicantKeys)
  }

// Function for selecting multiple applincants before assigning a interview schedule

  clickSelectBox(itemKey){
    
    const foundAt = this.applicantKeys.indexOf(itemKey);
      if (foundAt >= 0) 
        this.applicantKeys.splice(foundAt, 1);
      else 
        this.applicantKeys.push(itemKey);

        /*if(this.applicantKeys.length<1){
        this.checkAll=false
        this.selectAll()
        
        }*/
       
       

}


  

// function for retrieving the history of schedules
interviewDate=[]
viewInterviewDates(){
  this.showFooter=false
  
    this.getSchedules().subscribe(
      res=>{
       this.interviewDate= res.map(item=>{
         return{ 
            $key:item.key,
            ...item.payload.val()}
        });//end of map
      });//end of subscribe
      console.log(this.interviewDate)
      this.content.resize()
}//end of function
  

interviewDetailsPage(interviewKey,interviewDate,){
  
  this.navCtrl.push('InterviewDetailsPage',{'key':interviewKey,'date':interviewDate});
}


  
}
