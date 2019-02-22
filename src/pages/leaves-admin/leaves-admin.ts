import { leaveCounter } from './../../providers/user-leaves';
import { Chain } from '@angular/compiler';
import { Firebase } from '@ionic-native/firebase';

import { AngularFireDatabase } from '@angular/fire/database';
import { Calendar } from './../../providers/calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, List } from 'ionic-angular';
import { P } from '@angular/core/src/render3';

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
  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase) {
    this.leaves='leaveRequests';
this.viewLeaveRequest()
   
} 



leaveRequests=[]
 viewLeaveRequest(){
 let leaveRequests=[]
   
this.firebase.database.ref(`EmployeeLeaves`).orderByChild('status').equalTo('pending').on("value", (snap)=> {
      snap.forEach((child)=>{
        leaveRequests.push({
          $key:child.key,
          ...child.val()
        })
      })
      
  })

  this.leaveRequests=leaveRequests.reverse()
 
}

  openModal(page:string,data?:object){
        const modal=this.modalCtrl.create(page,{"userDetails":data});
        modal.present();

  }



  
 

  

}
