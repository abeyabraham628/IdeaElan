import { leaveCount,leaves } from './../../providers/user-leaves';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Form, AlertController } from 'ionic-angular';
import { CalendarModal,CalendarResult} from "ion2-calendar";

import { LeaveModel } from '../../models/leave.model';
import { CustomDatePicker } from '../../models/datepicker';

import { AngularFireAuth } from '@angular/fire/auth';
import {FormControl, FormGroup,Validators, FormBuilder} from '@angular/forms'

import { AngularFireDatabase } from '@angular/fire/database';
import { PageHeaderComponent } from '../../components/page-header/page-header';









/**
 * Generated class for the ApplyLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html',
})
export  class ApplyLeavePage{
 

leaveCount={} as leaveCount
leaveInfo={} as leaves
ionSegmentDefaultValue:string
leaveRecords:any
leaveDates:any
dateRange:any="This Month Leave"
months=this.customDatePicker.getMonths()

 constructor(private alertCtrl:AlertController,private formBuilder:FormBuilder,private afauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,private customDatePicker:CustomDatePicker,private userLeave:LeaveModel,private firebase:AngularFireDatabase) {
            this.ionSegmentDefaultValue="applyLeave";
            this.viewRemainingLeaves();
            
            
     }

  


 

  leaveForm= this.formBuilder.group({
    
    leaveType  :['',Validators.required],
    date  :['',Validators.requiredTrue],
    
      
   
});



   datePicker(pickMode){
    
   let dateLimit=new Date().setDate(new Date().getDate()+45)// Display  45 days from today
   var defaultScrollTo=new Date()
    let disableWeek=[0,6]// disable Sunday-0 and Saturday-6
    if(pickMode=='multi'){
      let from=new Date()
    var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from,dateLimit,disableWeek)
    }
    else{
      let from=new Date('2/1/2018')
      var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from)
    }
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options,
      });
         
      myCalendar.present();
       
      myCalendar.onDidDismiss((date: CalendarResult[]) => {
        if(date!=null){
        if(pickMode==='multi'){
        date.sort(function (a, b) { // sorting the dates in ascending order with the time property
          return a.time - b.time;
        });
            
          let selectedDates=this.userLeave.arrangeDates(date)
            this.leaveDates=selectedDates.date1+","+selectedDates.date2
              this.leaveInfo.date=selectedDates.date1;
              if(selectedDates.date2.length>0)
                this.leaveInfo.date2=selectedDates.date2;
      }
      else{
        let from=date['from'].string.split('-')
        let to=date['to'].string.split('-')
        this.dateRange=from[2]+"-"+from[1]+"-"+from[0]+" to "+to[2]+"-"+to[1]+"-"+to[0]
        this.leaveHistory(date['from'].time,date['to'].time)
      }
    }

     })//end of displayCalendar function
    }// end of datepicker function


    
 applyForLeave(leaveInfo){
  
   leaveInfo.userId=this.afauth.auth.currentUser.uid
   leaveInfo.status="pending"
   this.userLeave.submitLeaveRequest(leaveInfo)
 }

 
  leaveHistory(from?,to?){
   
   this.leaveRecords=this.userLeave.getPastLeaves(this.afauth.auth.currentUser.uid,from,to)
   
 }

    viewRemainingLeaves(){
        this.userLeave.getRemainingLeaves(this.afauth.auth.currentUser.uid).then((item)=>{
        this.leaveCount.sickRemaining=item[0].sick;
        this.leaveCount.casualRemaining=item[0].casual;
        this.leaveCount.currentMonthLeave=item[0].currentMonthLeave
      })
    }
    
   deleteLeave($key){
    const confirm = this.alertCtrl.create({
      title:'Confirm',
      message: 'Do you want to cancel this leave request',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.firebase.database.ref(`EmployeeLeaves`).child(`${$key}`).remove()
            this.leaveHistory();
            //this.userLeave.saveLeaveStatus(data,this.leaveCount,status)
          }
        },
        {
          text: 'No',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();
   } 
  
}// end of class
