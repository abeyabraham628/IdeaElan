import { LeaveModel } from './../../models/leave.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';



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

  constructor(private userLeave:LeaveModel,public modalCtrl:ModalController,public navParams: NavParams) {
    this.leaves='leaveRequests';
    this.leaveRequests=this.userLeave.viewLeaveRequest()
    
} 


  openModal(page:string,data?:object){
        const modal=this.modalCtrl.create(page,{"userDetails":data});
        modal.present();

  }



  
 

  

}
