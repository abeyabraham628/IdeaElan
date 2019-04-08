import { ElementRef, Renderer } from '@angular/core';
import { concatAll } from 'rxjs/operators';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker';
import * as moment from 'moment';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import * as  mdDateTimePicker  from 'md-date-time-picker/dist/js/mdDateTimePicker.js';

/**
 * Generated class for the InterviewSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interview-schedule',
  templateUrl: 'interview-schedule.html',
})
export class InterviewSchedulePage {
  applicantKeys:string[] = [];
 //Initialising schedule form
 scheduleForm=new FormGroup({
  scheduleDate:new FormControl('',Validators.required),
  scheduleTime:new FormControl('',[Validators.required]),
  contactPerson:new FormControl('',[Validators.required,Validators.minLength(4)]),
  contactPersonNum: new FormControl('',[Validators.required,Validators.minLength(10)]),
  jobTitle: new FormControl('', Validators.required)
 
});
@ViewChild('dateElem' ,{ read: ElementRef }) dateElem:ElementRef;
@ViewChild('timeElem' ,{ read: ElementRef }) timeElem:ElementRef;
  constructor(public renderer:Renderer,public alertCtrl:AlertController, private datePicker:DatePicker,public navCtrl: NavController, public navParams: NavParams,private firebase:AngularFireDatabase) {
    this.applicantKeys=this.navParams.data
   this.getSchedules()
  }

  

  
    dispDate(type:string){
      if(type=="date"){
        let datePicker = new mdDateTimePicker.default({
          type: 'date',
          past:moment(),
          future:moment().add(5,'months'),
          trigger : this.dateElem.nativeElement
        });
        datePicker.toggle()
        this.renderer.listen(this.dateElem.nativeElement, 'onOk', () => {
        this.scheduleForm.controls.scheduleDate.setValue(moment(datePicker.time).format('D-MMM-YYYY'))
      
      })
    }
    else{
      let datePicker = new mdDateTimePicker.default({
        type: 'time',
        //past:moment(),
        //future:moment().add(5,'months'),
        trigger : this.dateElem.nativeElement
      });
      datePicker.toggle()
      this.renderer.listen(this.dateElem.nativeElement, 'onOk', () => {
      this.scheduleForm.controls.scheduleTime.setValue(moment(datePicker.time).format('h:m A'))
    
    })

    }
    }
    
      
    

  applicantList:AngularFireList<any>=this.firebase.list('Applicants');
  scheduleList:AngularFireList<any>;
 
  
    //
    getSchedules(){
      this.scheduleList=this.firebase.list('schedules');
      return this.scheduleList.snapshotChanges();
     };

  saveSchedule(){
    
    
    let schedule={  
                    jobTitle:this.scheduleForm.controls.jobTitle.value, 
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
            interviewDate:snap.key,
            interviewStatus:'Not Reported'
            
        }).then(()=>{
          let alert = this.alertCtrl.create({
            title: "Success",
            subTitle: "Schedule created succesfuly ",
            buttons: ['OK']
          });
          
          alert.present();
          this.scheduleForm.reset()
        this.applicantKeys=[]
          

        });
        
     });
     
   }//end of save schedule function

}
