import { concatAll } from 'rxjs/operators';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { LoadingController } from 'ionic-angular';
import {FCM} from '@ionic-native/fcm'
import * as moment from 'moment'
import { symlink } from 'fs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 
userId:any
userType:any[]
loader:any
FirebasePlugin: any;
blength:any=0;
wlength:any=0;
//lrcount:any=0;

devicetoken : any ="abc";

  constructor(private fcm:FCM,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private firebase:AngularFireDatabase,public loadingCtrl: LoadingController) {
    this.userType=this.navParams.data
  
    
    
    
    this.lrcountcheck();
    
    this.fcm.getToken().then(token => {
      //backend.registerToken(token);
      this.devicetoken=token;
      this.checks();
      //alert(token);
    });
    this.fcm.onTokenRefresh().subscribe(token => {
      this.devicetoken=token;
      this.checks();
      //alert("updated");
    });
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        this.navCtrl.push(HomePage);
        
      } else {
        this.navCtrl.push(HomePage);
       
      };
    });
    
  }


  

  lrstatus=[]
  async lrcountcheck(){
    let lrstatus=[];
     await this.firebase.database.ref(`EmployeeLeaves`).once('value',function(snap){
     snap.forEach(snap=>{
        if(snap.child('status').val()=="pending"){
            lrstatus.push(snap.child('status').val());
          }
      }) ;
    });
      this.lrstatus=lrstatus
  }

  
  checks(){
    var idOftoken , tokenStatus;
    this.firebase.database.ref('tokensNotificationId').orderByChild('userIdTocken').equalTo(`${this.afAuth.auth.currentUser.uid}`).once("value",(snap)=>{
   
     snap.forEach((child) => {
       
         
         this.firebase.object("/tokensNotificationId/"+child.key)

 .update({ tokenid:this.devicetoken,userIdTocken : this.afAuth.auth.currentUser.uid});
       
     })

//if not exsist , needed to be added , but already user will have an entry to token list as it is added in newuser.ts file 
  
      
      });
   }
 
 
   ionViewDidLoad() {
      //this.getMessages()
      this.getUpComingEvents()
      this.getUpComingEventsNotification()
   }

 

 

  goto(page:string){
    
    this.navCtrl.push(page)
    
  }

 
  /*messages=[]
  getMessages(){
    this.firebase.list('messages').snapshotChanges().subscribe(snap=>{
      this.messages=snap.map(item=>{
        return{
          $key:item.key,
          ...item.payload.val()
        }
  
      })
    })
    
  }
  
  viewMessages(x){
      let modal=this.modalCtrl.create({
        title:x.subject,
     })
      modal.present()
  }*/
  
  events=[]
  systemEvents=[]
  interviewEvents=[]
  allEvents=[]
  employeeList=[]
  async getUpComingEvents(){
   
   let bday:any
   let anniversary:any
   let avExpiry:any
   let interviewDate:any

   /*let org:any
   let diffDays:number
   let timeDiff:number
   */

    await this.firebase.database.ref(`users`).once('value',(snap)=>{
      
      snap.forEach(snap=>{
        bday=snap.child('dob').val()
        anniversary=snap.child('doj').val()
        this.employeeList.push({
          '$key':snap.key,
         'fName':snap.child('fname').val(),
         'lName':snap.child('lname').val()
       })
       
      if(parseInt(moment().format('M'))==parseInt(moment(bday).format('M')) && parseInt(moment().format('D'))<=parseInt(moment(bday).format('D'))  ){
          
          this.events.push({
            'title':'Birthday',
            'user':snap.child('fname').val()+" "+snap.child('lname').val(),
            'userId':snap.child('userId').val(),
            'date':moment(bday).format('D-MMM')+"-"+moment().format('YYYY')
          })
        }

        if(parseInt(moment().format('M'))==parseInt(moment(anniversary).format('M')) && parseInt(moment().format('D'))<=parseInt(moment(anniversary).format('D'))  ){
          this.events.push({
            'title':'Work Anniversary',
            'user':snap.child('fname').val()+" "+snap.child('lname').val(),
            'userId':snap.child('userId').val(),
            'date':moment(anniversary).format('D-MMM')+"-"+moment().format('YYYY')
          })
        }
      })
    }) ;
    
   
   await this.firebase.database.ref(`systems`).once('value',(snap)=>{
     
    snap.forEach(snap=>{
      
      avExpiry=snap.child('avExpiry').val()
      let empObj=this.employeeList.find(key=>key.$key==snap.child('systemUser').val())
      let empName="User: "+empObj.fName+" "+empObj.lName
      if(parseInt(moment().format('M'))==parseInt(moment(avExpiry).format('M')) && parseInt(moment().format('D'))<=parseInt(moment(avExpiry).format('D'))  ){
        
        this.systemEvents.push({
          'title':'Anti Virus Expiry',
          'user':empName,
          'userId':snap.child('systemId').val(),
          'date':moment(avExpiry).format('D-MMM')+"-"+moment().format('YYYY')
        })
     
      }

    })
  });//end of systems event list
  

  await this.firebase.database.ref(`Schedules`).once('value',(snap)=>{
    snap.forEach(snap=>{
      interviewDate=snap.child('interviewDate').val()
      
      if(parseInt(moment().format('M'))==parseInt(moment(interviewDate).format('M')) && parseInt(moment().format('D'))<=parseInt(moment(interviewDate).format('D'))  ){
        
        this.interviewEvents.push({
          'title':'Upcoming Interview',
          'user':null,
          'userId':null,
          'date':moment(interviewDate).format('D-MMM')+"-"+moment().format('YYYY')
        })
     
      }

    })
  });//end of systems event list
  

  console.log(this.userType)
  if(this.userType[0]=="value1"){//for admin
    this.systemEvents.forEach(item=>this.events.push(item))
    this.interviewEvents.forEach(item=>this.events.push(item))
  }
  if(this.userType[0]!="value1" && this.userType[4]=="value5"){//recruitment
    this.interviewEvents.forEach(item=>this.events.push(item))
  }
  if(this.userType[0]!="value1" && this.userType[4]!="value5" && this.userType[5]=="value6"){//system
    this.systemEvents.forEach(item=>this.events.push(item))
  }
  


  }//end of getupcoming events function
  bevents=[]
  wevents=[]
  async getUpComingEventsNotification(){
    let bevents=[]
    let wevents=[]
     let bday:any
     let anniversary:any
     let org:any
     let diffDays:number
     let timeDiff:number
      await this.firebase.database.ref(`users`).once('value',function(snap){
        
        snap.forEach(snap=>{
          bday=snap.child('dob').val()
        anniversary=snap.child('doj').val()
        if(parseInt(moment().format('M'))==parseInt(moment(bday).format('M')) && parseInt(moment().format('D'))<=parseInt(moment(bday).format('D'))  ){
            bevents.push({
              'title':'Birthday',
              'user':snap.child('fname').val()+" "+snap.child('lname').val(),
              'userId':snap.child('userId').val(),
              'date':moment(bday).format('D-MMM')+"-"+moment().format('YYYY')
            })
          }
  
          if(parseInt(moment().format('M'))==parseInt(moment(anniversary).format('M')) && parseInt(moment().format('D'))<=parseInt(moment(anniversary).format('D'))  ){
            wevents.push({
              'title':'Work Anniversary',
              'user':snap.child('fname').val()+" "+snap.child('lname').val(),
              'userId':snap.child('userId').val(),
              'date':moment(anniversary).format('D-MMM')+"-"+moment().format('YYYY')
            })
          }
        })
       
  
            
      }) ;
       this.bevents=bevents;
       this.wevents=wevents;
       this.blength=bevents.length;
       this.wlength=wevents.length;
       
    await  this.firebase.database.ref(`eventTrigger/WorkEvents`).update({
        length : this.wlength,
        
       })
       await  this.firebase.database.ref(`eventTrigger/birthdayEvents`).update({
        length : this.blength,
        
       })

    }




  


}

