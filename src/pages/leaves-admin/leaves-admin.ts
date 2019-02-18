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
this.notify()
   
} 

async notify(){
  var x=[]
    var counter=0
     await this.firebase.database.ref('EmployeeLeaves').once('value', function(snapshot){
        
       snapshot.forEach(child=>{
        child.forEach(c=>{
          c.forEach(x=>{
            
            if(x.child('status').val()==="pending")
            counter=counter+1
            

          })
        })
       })

  })
  console.log(counter)
}

  openModal(page:string){
        const modal=this.modalCtrl.create(page);
        modal.present();

  }


  
 

  

}
