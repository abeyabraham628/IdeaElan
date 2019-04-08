//Author:Tony Manuel

import { ElementRef, Renderer } from '@angular/core';



import { DatePicker } from '@ionic-native/date-picker';


import { leaveCount,leaves } from './../../providers/user-leaves';
import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Form, AlertController, LoadingController } from 'ionic-angular';
import { CalendarModal,CalendarResult} from "ion2-calendar";

import { LeaveModel } from '../../models/leave.model';
import { CustomDatePicker } from '../../models/datepicker';

import { AngularFireAuth } from '@angular/fire/auth';
import {Validators, FormBuilder} from '@angular/forms'

import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment'
import * as  mdDateTimePicker  from 'md-date-time-picker/dist/js/mdDateTimePicker.js';





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
@ViewChild('dateFromElem' ,{ read: ElementRef }) dateF:ElementRef;
@ViewChild('dateToElem' ,{ read: ElementRef }) dateT:ElementRef;
 constructor(public renderer:Renderer,private alertCtrl:AlertController,private formBuilder:FormBuilder,private afauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController,private customDatePicker:CustomDatePicker,private userLeave:LeaveModel,private firebase:AngularFireDatabase) {
    //this.getRemainingLeave()
    
            
     }

     ionViewDidEnter(){
      this.ionSegmentDefaultValue="applyLeave";
      //this.getRemainingLeave()
      this.viewRemainingLeaves()
      }
     
     
     

     ionViewDidLeave() {
      this.navCtrl.popToRoot();
      this.resetForm()

    }
  
    /*getRemainingLeave(){
      
      
      this.viewRemainingLeaves()

    }*/

    resetForm(){
      this.leaveForm.reset()
        this.leaveErr=true;
        this.dateErr= true;
    }

 

  leaveForm= this.formBuilder.group({
    
    leaveType  :['',Validators.requiredTrue],
    date  :['',Validators.required],
    
      
   
});



   datePicker(pickMode){
     let dateLimit:any
     if(this.leaveInfo.leaveType==null)
      return
    if(this.leaveInfo.leaveType=='sick'){
       dateLimit=moment().add(5, 'days');
    }
    else{
    dateLimit=moment().add(45, 'days');// Display  45 days from today
    }
   var defaultScrollTo=moment()// scroll to curren date
    let disableWeek=[0,6]// disable Sunday-0 and Saturday-6
    if(pickMode=='multi'){// Select multiple dates fron date picker
    let from=moment()// current date selected in date picker
    var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from,dateLimit,disableWeek)
    }
    else{// for selecting range of dates
      let from=moment('1/2/2018','D/M/YYYY')// default starting date is set to Feb 2018
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
            this.leaveDates=selectedDates.date1+","+selectedDates.date2// header display
              this.leaveInfo.date=selectedDates.date1;
              if(selectedDates.date2.length>0)
                this.leaveInfo.date2=selectedDates.date2;
      }
      else{
        
        let from=moment(date['from'].string).format('D/MMM/YYYY')
        let to=moment(date['to'].string).format('D/MMM/YYYY')
        this.dateRange=from+" to "+to
        this.leaveHistory(date['from'].time,date['to'].time)
      }
      }
    

     })//end of displayCalendar function
    }// end of datepicker function
    dateFrom:any
    dateTo:any
    dateLimit:any=null
    dispDate(type:String){
      if(type==="from"){
        let datePicker = new mdDateTimePicker.default({
          type: 'date',
          trigger : this.dateF.nativeElement
        });
        datePicker.toggle()
        this.renderer.listen(this.dateF.nativeElement, 'onOk', () => {
        this.dateFrom=moment(datePicker.time).format('D-MMM-YYYY')
        this.dateLimit=moment(datePicker.time)
      })
    }
    else if(type=='to' && this.dateLimit!=null){
      let datePicker = new mdDateTimePicker.default({
        type: 'date',
        past:this.dateLimit,
        trigger : this.dateT.nativeElement
      });
      datePicker.toggle()
      this.renderer.listen(this.dateT.nativeElement, 'onOk', () => {
        this.dateTo=moment(datePicker.time).format('D-MMM-YYYY')
        this.dateRange=this.dateFrom+" to "+this.dateTo
      })
    }
      
    }



  leaveErr:boolean=true
  dateErr:boolean=true
 applyForLeave(leaveInfo){
 
    leaveInfo.leaveType==null?this.leaveErr=false:this.leaveErr=true
    leaveInfo.date==null?this.dateErr=false:this.dateErr=true 
   if(this.leaveErr && this.dateErr){

   leaveInfo.userId=this.afauth.auth.currentUser.uid
   leaveInfo.status="pending"
   this.userLeave.submitLeaveRequest(leaveInfo).then(()=>{
    this.leaveForm.reset()
   })
 
}
    
}//end of apply for leave
 
getMyLeaves(){
  if(this.dateFrom!='' && this.dateTo!='')
    this.leaveHistory(this.dateFrom,this.dateTo)
}
 
  leaveHistory(from?,to?){
    this.leaveForm.reset()
    this.leaveRecords=[]
   this.leaveRecords=this.userLeave.getPastLeaves(this.afauth.auth.currentUser.uid,from,to)
   
 }

    viewRemainingLeaves(){
      
      this.dateRange="This Month Leave"
      this.dateFrom=""
      this.dateTo=""
      this.dateLimit=null
      this.leaveRecords=[]
      this.leaveDates=""
      
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
