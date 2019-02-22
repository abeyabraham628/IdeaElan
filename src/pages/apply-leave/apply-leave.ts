
import { leaves, DayMonthYear } from './../../providers/user-leaves';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, List, ItemContent } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { CalendarModal,CalendarResult,CalendarComponentOptions } from "ion2-calendar";






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
leaves:string
months={} as DayMonthYear

currentMonthLeave:number=0;
$key1:any;
$key2:any;
multiKey:boolean=false

type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'


 monthName=[{'monthName':'January','value':'01'},
            {'monthName':'February','value':'02'},  
            {'monthName':'March','value':'03'},
            {'monthName':'April','value':'04'},  
            {'monthName':'May','value':'05'},  
            {'monthName':'June','value':'06'},  
            {'monthName':'July','value':'07'}, 
            {'monthName':'August','value':'08'},  
            {'monthName':'September','value':'09'},  
            {'monthName':'October','value':'10'},  
            {'monthName':'November','value':'11'},  
            {'monthName':'December','value':'12'}]



  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            private datePicker:DatePicker, 
            private firebase:AngularFireDatabase,
            private datepipe:DatePipe,
            private afauth:AngularFireAuth,
            private alert:AlertController,
            private modalCtrl:ModalController,
           ) {
            this.leaves="applyLeave";
           }

          
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

  

  async submitLeaveRequest(){
      let uid=this.afauth.auth.currentUser.uid;
      var userName:any
     await this.firebase.database.ref(`users/${uid}`).once('value',(snap)=>{
        console.log(snap.val())
        userName=snap.child('fname').val()+" "+snap.child('lname').val()
      })

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
        var x=this.firebase.list(`EmployeeLeaves`).push({
          'name':userName,
          'leaveType':this.leave.leaveType,
          'date':this.leave.date,
          'status':this.leave.status,
          'userId':uid
          //'count':this.leave.count
         }).then(()=>{
          var y=this.firebase.list(`EmployeeLeaves`).push({
            'name':userName,
            'leaveType':this.leave.leaveType,
            'date':this.leave.date2,
            'status':this.leave.status,
            'userId':uid
        })
         
        })//inserting the details of leaves
        
      }
      else
          this.firebase.list(`EmployeeLeaves`).push({
            'name':userName,
            'leaveType':this.leave.leaveType,
            'date':this.leave.date,
            'status':this.leave.status,
            'userId':uid
          });
    

      //this.firebase.list(`EmployeeLeaves/${uid}/MonthlyLeaves/${this.$key1}`).push(dayCounter)
    }//end of if else 
         
       
    }//end os submit leave request function


  pastLeaves=[]
  
   async getPastLeaves(month?,year?){
    let pastLeaves=[]
    await this.firebase.database.ref(`EmployeeLeaves`).orderByChild(`userId`).equalTo(`${this.afauth.auth.currentUser.uid}`).once('value',(snap)=>{
          snap.forEach(function(child){
              pastLeaves.push({
                $key:child.key,
                ...child.val()
              })
            })
          
    })
    this.pastLeaves=pastLeaves.reverse()
      
     
         
     
}//end of function
sickRemaining:number;
casualRemaining:number;
async getRamainingLeaves(){
  let tony=[]
  let count:number=0
  let date:any;
  let year=new Date().getFullYear();
    if(new Date().getMonth()+1<10){
       date="0"+(new Date().getMonth()+1)+""+new Date().getFullYear()
    }
    else{ 
      date=new Date().getMonth()+1+""+new Date().getFullYear()
    }

    
    
    await this.firebase.database.ref(`AvailableLeaves/${new Date().getFullYear()}/${this.afauth.auth.currentUser.uid}`).once('value',(snapshot)=>{
      this.sickRemaining=snapshot.child('sick').val()
      this.casualRemaining=snapshot.child('casual').val()
    }).then(()=>{

       this.firebase.database.ref(`EmployeeLeaves`).orderByChild(`userId`).equalTo(`${this.afauth.auth.currentUser.uid}`).on('value',(snap)=>{
          snap.forEach((child)=>{
               
                tony.push(child.child('date').val())
          })  
          
          tony.forEach(x=>{
            if(x.length>1){
              x.forEach(x => {
                if(new Date(x).getMonth()+1===new Date().getMonth()+1 && new Date(x).getFullYear()===new Date().getFullYear()){
                  count+=1;
                }
                
              });
             
            }
            else{
            if(new Date(x).getMonth()+1===new Date().getMonth()+1 && new Date(x).getFullYear()===new Date().getFullYear()){
              count+=1;
            }
          }

          })
      })
      this.currentMonthLeave=count
    })
    
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

showYear:boolean=true
enableYear(){
  this.months.year=null
  this.showYear=false;
  console.log("fasd")
}
  

}// end of class
