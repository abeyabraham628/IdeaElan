import { CustomDatePicker } from './../../models/datepicker';
import { LeaveModel } from './../../models/leave.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, NavController } from 'ionic-angular';
import { Employee } from '../../models/employee.model';
import { CalendarModal,CalendarResult} from "ion2-calendar";
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment'

/**
 * Generated class for the LeavesAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaves-admin',
  templateUrl: 'leaves-admin.html',
})
export class LeavesAdminPage {

  leaves:string
  leaveRequests:any
  employeeName:any
  employeeKey:any
  dateRange:any="Select Date"
  
  leaveRecords:any=[]
  public waitForPop: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor(public navCtrl:NavController,private userLeave:LeaveModel,public modalCtrl:ModalController,public navParams: NavParams,private empDetails:Employee,private customDatePicker: CustomDatePicker) {
    this.leaves='viewLeaveRequests';
    this.viewLeaveRequests()
    
    
    
    
} 


viewLeaveRequests(){
  this.resetFields()
  this.leaveRequests=this.userLeave.viewLeaveRequest()
}

resetFields(){
  this.leaveRecords=[]
  this.dateRange="";
  this.employeeKey=""

}

clearDatePicker(){
  this.dateRange=""
}

datePicker(pickMode){
    
  
  var defaultScrollTo=new Date()
  let from=moment('1/2/2018','D/M/YYYY')
  var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from)
  
   let myCalendar =  this.modalCtrl.create(CalendarModal, {
     options: options,
     });
        
     myCalendar.present();
      
     myCalendar.onDidDismiss((date: CalendarResult[]) => {
       
       if(date!=null && this.employeeKey!=""){
        let from=moment(date['from'].string).format('D/MMM/YYYY')
        let to=moment(date['to'].string).format('D/MMM/YYYY')
        this.dateRange=from+" to "+to
        this.leaveHistory(date['from'].time,date['to'].time)

       
      }
     })

    }// end of datepicker function
   
     goto(page:string,data?:object){
       
       this.waitForPop.next(false);
      this.navCtrl.push(page,{"userDetails":data})
    }



    ionViewDidLeave() {
      this.waitForPop.subscribe((ok) => { 
        if (ok) {
          this.navCtrl.popToRoot()  
        } 
     });
}

  async getEmployee(){
    this.employeeName=[]
    this.empDetails.getEmployee().then(item=>{
      item.forEach(value=>{
        this.employeeName.push(value)
      })
      
    })
    
    
  }

  leaveHistory(from?,to?){
      this.leaveRecords=this.userLeave.getPastLeaves(this.employeeKey,from,to)
   }



  
 

  

}
