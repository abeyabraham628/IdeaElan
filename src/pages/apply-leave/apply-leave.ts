import { leaves } from './../../providers/user-leaves';
import { Component, Type } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { leave } from '@angular/core/src/profile/wtf_impl';
import { ConditionalExpr } from '@angular/compiler';

/**
 * Generated class for the ApplyLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html',
})
export class ApplyLeavePage {
fromDate:string;
toDate:string;
leaveList:AngularFireList<any>
leave={} as leaves
sickRemaining:number;
casualRemaining:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private datePicker:DatePicker, private firebase:AngularFireDatabase,private datepipe:DatePipe,private afauth:AngularFireAuth,private alert:AlertController) {
   
    
  }

  ionViewDidLoad() {
    this.getRamainingLeaves()
  }

  dispdate(type:String){
    this.datePicker.show({
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
  }).then(
    date=>{
     if(type==="from"){
       this.leave.dateFrom = new Date(date).toLocaleDateString()
     }
     else{
       this.leave.dateTo= new Date(date).toLocaleDateString()
     }
   },err => console.log('Error occurred while getting date: ', err)

   );
  }//end of date function

 

  
  submitLeaveRequest(){
      let uid=this.afauth.auth.currentUser.uid;
      this.leave.status="pending";
      
     if(new Date().getHours()>9){
        const alert = this.alert.create({
          title: 'Restricted',
          subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
          buttons: ['OK']
          });
        alert.present();
    }
      
    else{
      var result=[]
      var firebase= this.firebase;
      firebase.database.ref(`EmployeeLeaves/${uid}/AvailableLeaves`).once("value",function(snapshot) {
       if(snapshot.val()==null){
                firebase.database.ref(`Leaves`).on("value",function(snapshot){
                firebase.object(`EmployeeLeaves/${uid}/AvailableLeaves`).set(snapshot.val())
             })
       }
       
        snapshot.forEach(function(childSnapshot) {
          result={
          $key:childSnapshot.key,
          ...childSnapshot.val()
          }
            return false;
        });//end of snap for each
    });//end of database.ref

     firebase.list(`EmployeeLeaves/${uid}/Leaves`).push(this.leave);
    }//end of if else 
        
       
    }//end os submit leave request function


  pastLeaves:any[]
  
   getPastLeaves(){
    
    this.firebase.list(`EmployeeLeaves/${this.afauth.auth.currentUser.uid}/Leaves`).snapshotChanges().subscribe(
      list=>{
        this.pastLeaves=list.map(item=>{
          return{
            $key:item.key,
            ...item.payload.val()
          };
          });
      }); 
}//end of function

async getRamainingLeaves(){
    await this.firebase.database.ref(`EmployeeLeaves/${this.afauth.auth.currentUser.uid}/AvailableLeaves`).on('value',(snapshot)=>{
      this.sickRemaining=snapshot.child('sick').val()
      this.casualRemaining=snapshot.child('casual').val()
    })//end of database ref
}
    
  find(){
    let parts:any ='29/12/2018'.split('/');
    console.log(new Date())

    //var mydate = new Date(parts[1] parts[0] parts[2]).getDate(); 
    //console.log(mydate);
  }   
    

  

}// end of class
