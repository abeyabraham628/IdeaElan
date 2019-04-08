import { ElementRef } from '@angular/core';
import { leaveCount } from './../../providers/user-leaves';
import { LeaveModel } from './../../models/leave.model';

import { CustomDatePicker } from './../../models/datepicker';

import { CalendarModal,CalendarResult} from "ion2-calendar";

import { Component, Renderer, ViewChild } from '@angular/core';
import { IonicPage, NavParams,AlertController,ModalController, NavController } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment'
import * as  mdDateTimePicker  from 'md-date-time-picker/dist/js/mdDateTimePicker.js';
/**
 * Generated class for the ApproveLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approve-leave',
  templateUrl: 'approve-leave.html',
})
export class ApproveLeavePage {

leaveCount={} as leaveCount 
userLeaveDetails:any
months=this.datepicker.getMonths()
leaveRecords:any
from:any

to:any
dateRange:any="This month leaves"
@ViewChild('dateFromElem' ,{ read: ElementRef }) dateFromElem:ElementRef;
@ViewChild('dateToElem' ,{ read: ElementRef }) dateToElem:ElementRef;
public waitForPop: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor(public renderer:Renderer,public navCtrl:NavController, public modalCtrl:ModalController,private userLeave:LeaveModel,private datepicker:CustomDatePicker,public alertCtrl:AlertController, public navParams: NavParams) {
     this.userLeaveDetails=this.navParams.get('userDetails')
     this.userRemainingLeaves(this.userLeaveDetails.userId) 
     this.leaveRecords=this.userLeave.getPastLeaves(this.userLeaveDetails.userId)
  }

  /*ionViewDidLeave() {
    this.waitForPop.subscribe((ok) => { 
      if (ok) {
        this.navCtrl.popToRoot()  
      } 
   });
}*/
  
  datePicker(pickMode){
    
  
    var defaultScrollTo=new Date()
        let from=new Date('2/1/2018')
       var options=this.datepicker.datePickerOptions(pickMode,defaultScrollTo,from)
    
     let myCalendar =  this.modalCtrl.create(CalendarModal, {
       options: options,
      });
          
       myCalendar.present();
        
       myCalendar.onDidDismiss((date: CalendarResult[]) => {
         if(date!=null){
          let from=moment(date['from'].string).format('D/MMM/YYYY')
          let to=moment(date['to'].string).format('D/MMM/YYYY')
  
         this.dateRange=from+" to "+to
         this.leaveHistory(date['from'].time,date['to'].time)
         }
       })
  
      }// end of datepicker function
     
      dateFrom:any
      dateTo:any
      dateLimit:any=null
      dispDate(type:String){
        if(type==="from"){
          let datePicker = new mdDateTimePicker.default({
            type: 'date',
            trigger : this.dateFromElem.nativeElement
          });
          datePicker.toggle()
          this.renderer.listen(this.dateFromElem.nativeElement, 'onOk', () => {
          this.dateFrom=moment(datePicker.time).format('D-MMM-YYYY')
          this.dateLimit=moment(datePicker.time)
        })
      }
      else if(type=='to' && this.dateLimit!=null){
        let datePicker = new mdDateTimePicker.default({
          type: 'date',
          past:this.dateLimit,
          trigger : this.dateToElem.nativeElement
        });
        datePicker.toggle()
        this.renderer.listen(this.dateToElem.nativeElement, 'onOk', () => {
          this.dateTo=moment(datePicker.time).format('D-MMM-YYYY')
          this.dateRange=this.dateFrom+" to "+this.dateTo
        })
      }
        
      }



    userRemainingLeaves(userId){
    {
      this.userLeave.getRemainingLeaves(userId).then((item)=>{
      this.leaveCount.sickRemaining=item[0].sick;
      this.leaveCount.casualRemaining=item[0].casual;
      this.leaveCount.currentMonthLeave=item[0].currentMonthLeave;
      })
  }
    
  }

  goBack(){
    /*this.waitForPop.next(false);
    this.navCtrl
    this.navCtrl.push('LeavesAdminPage')*/
    
  }
  showConfirm(data,status:string) {
    const confirm = this.alertCtrl.create({
      title:'Confirm',
      message: 'Do you want to approve this leave request',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.userLeave.saveLeaveStatus(data,this.leaveCount,status),
            this.goBack()
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


  rejectConfirm(data,status:string) {
    const confirm = this.alertCtrl.create({
      title:'Reject',
      message: 'Provide the reason for rejection',
      inputs: [
        {
          name: 'reason',
          placeholder: 'Reason'
        },
      ],
      buttons: [
        {
          text: 'Yes',
          handler: (reject) => {
           
            this.userLeave.saveLeaveStatus(data,this.leaveCount,status,reject.reason),
            this.goBack()


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
  
  leaveHistory(from?,to?){
    
      this.leaveRecords=this.userLeave.getPastLeaves(this.userLeaveDetails.userId,from,to)
      
    
  }



}
