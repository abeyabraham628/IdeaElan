import { AngularFireAuth } from '@angular/fire/auth';
import { filter } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Calendar } from './../../providers/calendar';

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

  months=new Calendar()
  userLeaveDetails:any
 
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afauth:AngularFireAuth) {
     this.userLeaveDetails=this.navParams.get('userDetails')
     this.userRemainingLeaves(this.userLeaveDetails.userId) 
     
  }

  sickRemaining:number
  casualRemaining:number

   userRemainingLeaves(userId){
    
     this.firebase.database.ref(`AvailableLeaves/${new Date().getFullYear()}/${userId}`).on('value',(snapshot)=>{
      
      this.sickRemaining=snapshot.child('sick').val();
      this.casualRemaining=snapshot.child('casual').val();
    })
  }

  showConfirm(data,status:string) {
    const confirm = this.alertCtrl.create({
      title:'Confirm',
      message: 'Do you want to approve this leave request',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.saveLeaveStatus(data,status)
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
           
            this.saveLeaveStatus(data,status,reject.reason)

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
  

saveLeaveStatus(data,status:string,reason?:any){
  console.log(data.leaveType)
  if(status=="approved"){
  let count:number
 
  if(data.leaveType=="casual")
    count=this.casualRemaining-data.date.length;
  else
    count=this.sickRemaining-data.date.length;

  this.firebase.database.ref(`EmployeeLeaves/${data.$key}/status`).set(`${status}`).then(()=>{
  this.firebase.database.ref(`AvailableLeaves/${new Date().getFullYear()}/${data.userId}/${data.leaveType}`).set(count)
  })
  }
  else{
    this.firebase.database.ref(`EmployeeLeaves/${data.$key}`).update({'status':`${status}`,'reason':`${reason}`})
  }

}



}
