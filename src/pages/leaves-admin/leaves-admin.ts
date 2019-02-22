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



aby=[]
async viewLeaveRequest(){
  var x=[]
    var counter=0
    var leave
    var tony=[]
     /*await this.firebase.database.ref('LeaveRequests').once ('child_added', function(snapshot){
        leave=snapshot.val();
        tony=snapshot.val().split('/')
             
    })*/


    this.firebase.database.ref(`EmployeeLeaves`).orderByChild('status').equalTo('pending').on("value", function(snapshot) {
      console.log(snapshot.child('status').val());
      
  })

  
  /* await this.firebase.database.ref(`users/${tony[0]}`).once('value',(snap)=>{
        console.log(snap.child('fname').val())
   })*/
 
}

  openModal(page:string){
        const modal=this.modalCtrl.create(page);
        modal.present();

  }



  
 

  

}
