import { leaves, DayMonthYear } from './../../providers/user-leaves';
import { Component, Type } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, List } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult,CalendarComponentOptions } from "ion2-calendar";





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
export class ApplyLeavePage{
 
fromDate:string;
toDate:string;
leaveList:AngularFireList<any>
leave={} as leaves

months={} as DayMonthYear
sickRemaining:number;
casualRemaining:number;
currentMonthLeave:number=0;
$key1:any;
$key2:any;
multiKey:boolean=false

type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'





  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            private datePicker:DatePicker, 
            private firebase:AngularFireDatabase,
            private datepipe:DatePipe,
            private afauth:AngularFireAuth,
            private alert:AlertController,
            private modalCtrl:ModalController,
           ) {}

          
           openCalendar() {
           
            const options: CalendarComponentOptions = {
              pickMode: 'multi',
              showAdjacentMonthDay:false,
              disableWeeks: [0, 6],
              from:new Date(),
              to: new Date().setDate(new Date().getDate()+45)
             };

            let myCalendar =  this.modalCtrl.create(CalendarModal, {
              options: options,
            });
         
            myCalendar.present();
            
              myCalendar.onDidDismiss((date: CalendarResult[], type: string) => {
                
                date.sort(function (a, b) {
                  return a.time - b.time;

              });
              
            
             this.leave=this.tony(date)
              
              
             })//end of calendar dismiss
            
          }//end of open calendar function
     
        
  ionViewDidLoad() {
    this.getRamainingLeaves()
  }

  

 

  
  submitLeaveRequest(){
      let uid=this.afauth.auth.currentUser.uid;
      this.leave.status="pending";
      
      
     if(new Date().getHours()<9){
        const alert = this.alert.create({
          title: 'Restricted',
          subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
          buttons: ['OK']
          });
        alert.present();
    }
      
    else{
      if(this.multiKey){
        this.firebase.list(`EmployeeLeaves/${uid}/Leaves/${this.$key1}`).push({
          'leaveType':this.leave.leaveType,
          'date':this.leave.date,
          'status':this.leave.status,
          'count':this.leave.count

        }).then(()=>{
          this.firebase.list(`EmployeeLeaves/${uid}/Leaves/${this.$key2}`).push({
            'leaveType':this.leave.leaveType,
            'date':this.leave.date2,
            'status':this.leave.status,
            'count':this.leave.count2
        });//inserting the details of leaves
      });
    }
      else
      this.firebase.list(`EmployeeLeaves/${uid}/Leaves/${this.$key1}`).push(this.leave);//inserting the details of leaves
     
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
      console.log(this.pastLeaves)
}//end of function

async getRamainingLeaves(){
  let firebase=this.firebase;
  let date:any;
  let year=new Date().getFullYear();
    if(new Date().getMonth()+1<10){
       date="0"+(new Date().getMonth()+1)+""+new Date().getFullYear()
    }
    else{ 
      date=new Date().getMonth()+1+""+new Date().getFullYear()
    }


      await firebase.database.ref(`EmployeeLeaves/FcXUquFxnfalG9DzoNi4X0CnRoG2/AvailableLeaves/${year}`).on('value',(snapshot)=>{
      this.sickRemaining=snapshot.child('sick').val()
      this.casualRemaining=snapshot.child('casual').val()
      firebase.database.ref(`EmployeeLeaves/FcXUquFxnfalG9DzoNi4X0CnRoG2/MonthlyLeaves/${date}`).on('value',(snapshot)=>{
          this.currentMonthLeave=snapshot.val();
      })

    })//end of database ref*/


}
    
  

tony(data){
 
  
 this.months.month=[]
 this.months.day=[]
 this.months.year=[]
 this.leave.date=[]
 this.leave.date2=[]
 let selectedDates=[]

  data.forEach((values)=>{

    selectedDates.push(new Date(values.time).toLocaleDateString())
      this.months.month.push(values.months)
      this.months.year.push(values.years)

   })   
  
    this.months.month = this.months.month.filter((elem, i, arr) => {
      if (arr.indexOf(elem) === i) {
        return elem
      }
    })
    
    this.months.year = this.months.year.filter((elem, i, arr) => {
      if (arr.indexOf(elem) === i) {
        return elem
      }
    })
  




if(this.months.month.length===1 && this.months.year.length===1){
    this.$key1="0"+this.months.month[0]+""+this.months.year[0]
    
    for(let i=0;i<selectedDates.length;i++){
      this.leave.date.push(selectedDates[i]);
    }
    this.leave.count=this.leave.date.length
  }
  
  else if(this.months.month.length===2 && this.months.year.length===1){
    this.multiKey=true
    this.$key1="0"+this.months.month[0]+""+this.months.year[0]
    this.$key2="0"+this.months.month[1]+""+this.months.year[0]
      
    for(let i=0;i<selectedDates.length;i++){
      if((new Date(selectedDates[i]).getMonth()+1).toString()===this.months.month[0].toString())
      this.leave.date.push(selectedDates[i]);
     if((new Date(selectedDates[i]).getMonth()+1).toString()===this.months.month[1].toString())
     this.leave.date2.push(selectedDates[i]);
    }
    this.leave.count=this.leave.date.length
    this.leave.count2=this.leave.date2.length
  }

else if(this.months.month.length===2 && this.months.year.length===2){
  this.multiKey=true
    this.$key1="0"+this.months.month[0]+""+this.months.year[0]
    this.$key2="0"+this.months.month[1]+""+this.months.year[1]
    
    for(let i=0;i<selectedDates.length;i++){
      if((new Date(selectedDates[i]).getMonth()+1).toString()===this.months.month[0].toString())
      this.leave.date.push(selectedDates[i]);
     if((new Date(selectedDates[i]).getMonth()+1).toString()===this.months.month[1].toString())
     this.leave.date2.push(selectedDates[i]);
    }
    this.leave.count=this.leave.date.length
    this.leave.count2=this.leave.date2.length
  }
  
  
 
  return this.leave



 
}

  

}// end of class
