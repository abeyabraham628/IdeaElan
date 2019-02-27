

import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';


import { DatePipe } from '@angular/common';

import { CalendarModal,CalendarResult,CalendarComponentOptions } from "ion2-calendar";

import { LeaveModel } from '../../models/leave.model';
import { CustomDatePicker } from '../../models/datepicker';
import {leaveCount} from '../../providers/user-leaves'
import { AngularFireAuth } from '@angular/fire/auth';







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
ionSegmentDefaultValue:string










 

 
   
   constructor(private afauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,private customDatePicker:CustomDatePicker,private userLeave:LeaveModel) {
            this.ionSegmentDefaultValue="applyLeave";
            this.remaining()
            
            
     }

  months=this.customDatePicker.getMonths()

       
          
     
        
  ionViewDidLoad() {
    
  }

  leaveDates:any=[]
   datePicker(){
   
    let dateLimit=new Date().setDate(new Date().getDate()+45)// Display  45 days from today
    let disableWeek=[0,6]// disable Sunday-0 and Saturday-6
    let options=this.customDatePicker.datePickerOptions(dateLimit,disableWeek)
    
     
    let myCalendar =  this.modalCtrl.create(CalendarModal, {
      options: options,
      });
         
      myCalendar.present();
       
      myCalendar.onDidDismiss((date: CalendarResult[]) => {
        date.sort(function (a, b) { // sorting the dates in ascending order with the time property
          return a.time - b.time;
        });

            this.userLeave.arrangeDates(date)
          
      
      })//end of displayCalendar function
 }// end of datepicker function

 applyForLeave(leaveDates){
   this.userLeave.submitLeaveRequest(leaveDates)
 }

 pastLeave(){
   this.userLeave.getPastLeaves()
 }

   async remaining(){
     
    let x=await this.userLeave.getRemainingLeaves(this.afauth.auth.currentUser.uid).then(x => console.log(x))
     
    
    
  
 }
    
    
  
 








  

  





  

}// end of class
