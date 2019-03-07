


import { leaves,leaveCount } from '../providers/user-leaves';

import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AlertController, NavController, LoadingController } from 'ionic-angular';
import { leave } from '@angular/core/src/profile/wtf_impl';
import * as moment from 'moment'

@Injectable()
export class LeaveModel{
monthNumber:number[]=[]
leave={} as leaves
leaveCount={} as leaveCount
loader:any
loader1:any

  constructor( public loadingCtrl:LoadingController,private afauth:AngularFireAuth,private firebase:AngularFireDatabase,private alert:AlertController){
   
  }
  
   arrangeDates(date:any){
        
        let selectedDates=[]
        let date1=[]
        let date2=[]

         date.forEach((values)=>{
          selectedDates.push(moment(values.time).format('D-MMM-YYYY'))// Converting the time property returned from date pikcer to  dates .

             //selectedDates.push(new Date(values.time).toLocaleDateString())// Converting the time property returned from date pikcer to  dates .
             this.monthNumber.push(values.months)//Taking the month number which user has selected for  leave

          })   
          
         
          this.monthNumber = this.monthNumber.filter((elem, i, arr) => {
             if (arr.indexOf(elem) === i) {
               return elem
             }
           })
           
           
        
        if(this.monthNumber.length===1){
           selectedDates.forEach(date=>{
             date1.push(date);
           });
          
         }
         
         else if(this.monthNumber.length===2){
          selectedDates.forEach(date=>{
           if(moment(date).format('M')===this.monthNumber[0].toString())
             date1.push(date);
            if(moment(date).format('M')===this.monthNumber[1].toString())
            date2.push(date);
           });
        }
           return ({date1,date2})
       }


       async submitLeaveRequest(leaveInfo){
         
      
        var userName:any
        await this.firebase.database.ref(`users/${leaveInfo.userId}`).once('value',(snap)=>{
          
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
            'userId':leaveInfo.userId
            //'count':this.leave.count
           }).then(()=>{
            var y=this.firebase.list(`EmployeeLeaves`).push({
              'name':userName,
              'leaveType':leaveInfo.leaveType,
              'date':leaveInfo.date2,
              'status':leaveInfo.status,
              'userId':leaveInfo.userId
          })
           
          })//inserting the details of leaves
          
        }
        else
            this.firebase.list(`EmployeeLeaves`).push({
              'name':userName,
              'leaveType':leaveInfo.leaveType,
              'date':leaveInfo.date,
              'status':leaveInfo.status,
              'userId':leaveInfo.userId
            });
      
  
       
      }//end of if else 
           
         
      }//end os submit leave request function



      pastLeaves=[]
  
       getPastLeaves(userId,dateFrom?,dateTo?){
        this.loader=this.loadingCtrl.create({
          spinner:'dots',
          content:'Loading',
           dismissOnPageChange:true
         })
       this.loader.present()
            var pastLeaves=[]
            var flag:boolean=false
            this.firebase.database.ref(`EmployeeLeaves`).orderByChild(`userId`).equalTo(`${userId}`).once('value',(snap)=>{
              if(dateFrom !=null && dateTo !=null) 
              {
                  snap.forEach(function(child){

                    if(child.child('date').val().length>1){
                      child.child('date').forEach(data=>{
                        
                        if(new Date(data.val()).getTime()>=dateFrom && new Date(data.val()).getTime()<=dateTo)
                            flag=true
                          else
                            flag=false
                        });
                        if(flag)
                        pastLeaves.push({
                          $recKey:child.key,
                          ...child.val()
                        })

                      }
                      else{
                        if(new Date(child.child('date').val()).getTime()>=dateFrom && new Date(child.child('date').val()).getTime()<=dateTo)
                        pastLeaves.push({
                          $recKey:child.key,
                          ...child.val()
                        })
                      }
                     
                    })
              }
              else{
                snap.forEach(function(child){

                  if(child.child('date').val().length>1){
                    child.child('date').forEach(data=>{
                      
                      if(new Date(data.val()).getMonth()+1===new Date().getMonth()+1 && new Date(data.val()).getFullYear()===new Date().getFullYear())
                      flag=true
                        else
                          flag=false
                      });
                      if(flag)
                      pastLeaves.push({
                        $recKey:child.key,
                        ...child.val()
                      })

                    }
                    else{
                      if(new Date(child.child('date').val()).getMonth()+1===new Date().getMonth()+1 && new Date(child.child('date').val()).getFullYear()===new Date().getFullYear())
                      pastLeaves.push({
                        $recKey:child.key,
                        ...child.val()
                      })
                    }
                   
                  })

              }
              
       })//end of database ref
      
     

      
       this.loader.dismiss()
       return this.pastLeaves=pastLeaves.reverse()
         
        
            
        
   }//end of function
    
     async getRemainingLeaves(userId){
      this.loader1=this.loadingCtrl.create({
        spinner:'dots',
        content:'Loading',
         dismissOnPageChange:true
       })
      this.loader1.present()
     let remaininingLeaves=[]
     let count:number=0
     let casual:any
     let sick:any
     
         await this.firebase.database.ref(`AvailableLeaves/${new Date().getFullYear()}/${userId}`).once('value',(snapshot)=>{
            casual=snapshot.child('casual').val()
            sick=snapshot.child('sick').val()
            
        
       }) 
       await this.firebase.database.ref(`EmployeeLeaves`).orderByChild(`userId`).equalTo(`${userId}`).once('value',(snap)=>{
             snap.forEach((child)=>{
               if(child.child('status').val()==="approved")
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
                     
                     });// ed of for each
                     
                      remaininingLeaves.push({'casual':casual,'sick':sick,'currentMonthLeave':count})
                      
                     })//end of snap
                  
                      
                //})//end of then
                this.loader1.dismiss()
                return (remaininingLeaves)
                
   }

   
   viewLeaveRequest(){
    this.loader=this.loadingCtrl.create({
      spinner:'dots',
      content:'Loading',
       dismissOnPageChange:true
     })
    this.loader.present()
    let leaveRequests=[]
      
   this.firebase.database.ref(`EmployeeLeaves`).orderByChild('status').equalTo('pending').on("value", (snap)=> {
         snap.forEach((child)=>{
           leaveRequests.push({
             $key:child.key,
             ...child.val()
           })
         })
         
     })
     this.loader.dismiss()
     return leaveRequests.reverse()
    
   }



   
saveLeaveStatus(data,leaveCount,status:string,reason?:any){
  
  if(status=="approved"){
  let count:number
 
  if(data.leaveType=="casual")
    count=leaveCount.casualRemaining-data.date.length;
  else
    count=leaveCount-data.date.length;

  this.firebase.database.ref(`EmployeeLeaves/${data.$key}/status`).set(`${status}`).then(()=>{
  this.firebase.database.ref(`AvailableLeaves/${new Date().getFullYear()}/${data.userId}/${data.leaveType}`).set(count)
  })
  }
  else{
    this.firebase.database.ref(`EmployeeLeaves/${data.$key}`).update({'status':`${status}`,'reason':`${reason}`})
  }
  
}





}// end of class


