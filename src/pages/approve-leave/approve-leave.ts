import { leaveCount } from './../../providers/user-leaves';
import { LeaveModel } from './../../models/leave.model';

import { CustomDatePicker } from './../../models/datepicker';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

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
  constructor(private userLeave:LeaveModel,private datepicker:CustomDatePicker,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afauth:AngularFireAuth) {
     this.userLeaveDetails=this.navParams.get('userDetails')
     this.userRemainingLeaves(this.userLeaveDetails.userId) 
     this.leaveRecords=this.userLeave.getPastLeaves(this.userLeaveDetails.userId)
     
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

  showConfirm(data,status:string) {
    const confirm = this.alertCtrl.create({
      title:'Confirm',
      message: 'Do you want to approve this leave request',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.userLeave.saveLeaveStatus(data,this.leaveCount,status)
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
           
            this.userLeave.saveLeaveStatus(data,this.leaveCount,status,reject.reason)

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
  




}
