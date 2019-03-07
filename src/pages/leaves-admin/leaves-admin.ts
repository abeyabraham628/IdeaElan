import { CustomDatePicker } from './../../models/datepicker';
import { LeaveModel } from './../../models/leave.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, NavController } from 'ionic-angular';
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
  dateRange:any="Select Date"
  from:any
  to:any
  leaveRecords:any=[]
  constructor(public navCtrl:NavController,private userLeave:LeaveModel,public modalCtrl:ModalController,public navParams: NavParams,private empDetails:Employee,private customDatePicker: CustomDatePicker) {
    this.leaves='viewLeaveRequests';
    this.leaveRequests=this.userLeave.viewLeaveRequest()
    
    
    
    
} 
ionViewDidLeave() {
  //this.navCtrl.popToRoot();
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
       
       if(date!=null){
       let from=date['from'].string.split('-')
       let to=date['to'].string.split('-')

       this.from=date['from'].time
       this.to=date['to'].time
       this.dateRange=from[2]+"-"+from[1]+"-"+from[0]+" to "+to[2]+"-"+to[1]+"-"+to[0]

       this.leaveHistory()
      }
     })

    }// end of datepicker function
   
    goto(page:string,data?:object){
      this.navCtrl.push(page,{"userDetails":data});
    }

  

  async getEmployee(){
    this.employeeName=[]
    this.empDetails.getEmployee().then(item=>{
      item.forEach(value=>{
        this.employeeName.push(value)
      })
      
    })
    
    
  }

  leaveHistory(){
    
      this.leaveRecords=this.userLeave.getPastLeaves(this.employeeKey,this.from,this.to)
      
     
    
  }



  
 

  

}
