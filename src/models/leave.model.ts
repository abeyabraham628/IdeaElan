

import { leaves,leaveCount } from '../providers/user-leaves';

import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class LeaveModel{
monthNumber:number[]=[]
leave={} as leaves
leaveCount={} as leaveCount


  constructor(private afauth:AngularFireAuth,private firebase:AngularFireDatabase,private alert:AlertController){}

   arrangeDates(date:any){
        
        let selectedDates=[]
        this.leave.date=[]
        this.leave.date2=[]
         date.forEach((values)=>{
             selectedDates.push(new Date(values.time).toLocaleDateString())// Converting the time property returned from date pikcer to  dates .
             this.monthNumber.push(values.months)//Taking the month number which user has selected for  leave
          })   
         
          this.monthNumber = this.monthNumber.filter((elem, i, arr) => {
             if (arr.indexOf(elem) === i) {
               return elem
             }
           })
           
        
        if(this.monthNumber.length===1){
           selectedDates.forEach(date=>{
             this.leave.date.push(date);
           });
          
         }
         
         else if(this.monthNumber.length===2){
          selectedDates.forEach(date=>{
             if((new Date(date).getMonth()+1).toString()===this.monthNumber[0].toString())
             this.leave.date.push(date);
            if((new Date(date).getMonth()+1).toString()==this.monthNumber[1].toString())
            this.leave.date2.push(date);
           });
        }
           return this.leave
       }


       async submitLeaveRequest(leaveInfo){
        let userId=this.afauth.auth.currentUser.uid;
        var userName:any
       await this.firebase.database.ref(`users/${userId}`).once('value',(snap)=>{
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
        if(leaveInfo.date2){
          var x=this.firebase.list(`EmployeeLeaves`).push({
            'name':userName,
            'leaveType':leaveInfo.leaveType,
            'date':leaveInfo.date,
            'status':leaveInfo.status,
            'userId':userId
            //'count':this.leave.count
           }).then(()=>{
            var y=this.firebase.list(`EmployeeLeaves`).push({
              'name':userName,
              'leaveType':leaveInfo.leaveType,
              'date':leaveInfo.date2,
              'status':leaveInfo.status,
              'userId':userId
          })
           
          })//inserting the details of leaves
          
        }
        else
            this.firebase.list(`EmployeeLeaves`).push({
              'name':userName,
              'leaveType':leaveInfo.leaveType,
              'date':leaveInfo.date,
              'status':leaveInfo.status,
              'userId':userId
            });
      
  
       
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
   
    async getRemainingLeaves(userId){
      let remaininingLeaves=[]
     
     let count:number=0
     
     
         await  this.firebase.database.ref(`AvailableLeaves/${new Date().getFullYear()}/${userId}`).once('value',(snapshot)=>{
            remaininingLeaves.push({'casual':snapshot.child('casual').val(),
                                    'sick':snapshot.child('sick').val(),})
            
        
       }).then(async ()=>{ await this.firebase.database.ref(`EmployeeLeaves`).orderByChild(`userId`).equalTo(`${this.afauth.auth.currentUser.uid}`).once('value',(snap)=>{
             snap.forEach((child)=>{
               
                   if(child.child('date').val().length>1){
                     child.child('date').forEach(data=>{
                       if(new Date(data.val()).getMonth()+1===new Date().getMonth()+1 && new Date(data.val()).getFullYear()===new Date().getFullYear())
                       count+=1
                       });
                     }
                     else{
                       if(new Date(child.child('date').val()).getMonth()+1===new Date().getMonth()+1 && new Date(child.child('date').val()).getFullYear()===new Date().getFullYear())
                         count+=1;
                     }
                     
                     });
                     remaininingLeaves.push({'currentMonthLeave':count})
                     
                     
                   })
                   console.log(remaininingLeaves)
                   return Promise.resolve(remaininingLeaves)
                                   
                });
                
             
         
       
         
         
         
       
       
   }






}// end of class


