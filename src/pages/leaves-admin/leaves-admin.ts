import { CustomDatePicker } from './../../models/datepicker';
import { LeaveModel } from './../../models/leave.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { Employee } from '../../models/employee.model';
import { CalendarModal,CalendarResult} from "ion2-calendar";


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
  dateRange:any
  from:any
  to:any
  leaveRecords:any
  constructor(private userLeave:LeaveModel,public modalCtrl:ModalController,public navParams: NavParams,private empDetails:Employee,private customDatePicker: CustomDatePicker) {
    this.leaves='viewLeaveRequests';
    this.leaveRequests=this.userLeave.viewLeaveRequest()
    
    
    
} 

datePicker(pickMode){
    
  
  var defaultScrollTo=new Date()
      let from=new Date('2/1/2018')
     var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from)
  
   let myCalendar =  this.modalCtrl.create(CalendarModal, {
     options: options,
     });
        
     myCalendar.present();
      
     myCalendar.onDidDismiss((date: CalendarResult[]) => {
       let from=date['from'].string.split('-')
       let to=date['to'].string.split('-')

       this.from=from[2]+"-"+from[1]+"-"+from[0]
       this.to=to[2]+"-"+to[1]+"-"+to[0]
       
      
     })

    }// end of datepicker function
   

  openModal(page:string,data?:object){
        const modal=this.modalCtrl.create(page,{"userDetails":data});
        modal.present();

  }

  async getEmployee(){
    this.employeeName=[]
    this.empDetails.getEmployee().then(item=>{
      item.forEach(value=>{
        this.employeeName.push(value)
      })
      
    })
    console.log(this.employeeName )
    
  }

  leaveHistory(){
    if(this.employeeKey===null)
      alert("Select and Employee")
    else
      this.leaveRecords=this.userLeave.getPastLeaves(this.employeeKey,this.from,this.to)
      console.log(this.leaveRecords)
  }



  
 

  

}
