
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { LoadingController } from 'ionic-angular';
import {FCM} from '@ionic-native/fcm'
import * as moment from 'moment'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 
userId:any
roles:any[]
users:boolean=true
recruitment:boolean=true
systems:boolean=true
policy:boolean=true
leaveRequest:boolean=true
sendMessage:boolean=true
loader:any

FirebasePlugin: any;

blength:any=0;
wlength:any=0;
//lrcount:any=0;

devicetoken : any ="abc";

  constructor(private fcm:FCM,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private firebase:AngularFireDatabase,public loadingCtrl: LoadingController) {
   
    
    this.lrcountcheck();
    console.log(this.afAuth.auth.currentUser.uid);
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
        console.log("Received in background");
      } else {
        this.navCtrl.push(HomePage);
        console.log("Received in foreground");
      };
    });
    
    
    
    this.roles=navParams.get('roles')
    
     if(this.roles[0]!="null"){
        
      this.users=false
      this.recruitment=false
      this.systems=false
      this.policy=false
      this.leaveRequest=false
      this.sendMessage=false
    }

    if(this.roles[1]!="null")
      this.leaveRequest=false

     if(this.roles[2]!=null)
      this.policy=false
      if(this.roles[3]!="null")
      this.sendMessage=false
      if(this.roles[4]!="null")
      this.recruitment=false
      if(this.roles[5]!="null")
      this.systems=false
      if(this.roles[6]!="null")
      this.users=false
     
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
     // console.log(snap.val())
     snap.forEach((child) => {
       
         
         this.firebase.object("/tokensNotificationId/"+child.key)

 .update({ tokenid:this.devicetoken,userIdTocken : this.afAuth.auth.currentUser.uid});
       
       console.log(child.child('userIdTocken').val());
      console.log(child.key);
     })

//if not exsist , needed to be added , but already user will have an entry to token list as it is added in newuser.ts file 
  
      
      });
   }
 
 
   ionViewDidLoad() {
      this.getMessages()
      this.getUpComingEvents()
      this.getUpComingEventsNotification()
   }

 

 

  goto(page:string){
    
    this.navCtrl.push(page)
    
  }

 
  messages=[]
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
  }
  
  events=[]
  async getUpComingEvents(){
    let events=[]
   let bday:any
   let anniversary:any
   let org:any
   let diffDays:number
   let timeDiff:number
    await this.firebase.database.ref(`users`).once('value',function(snap){
      
      snap.forEach(snap=>{
        bday=snap.child('dob').val().split('/')
        anniversary=snap.child('doj').val().split('/')
        if(new Date().getMonth()+1===parseInt(bday[1],10) && new Date().getDate()<=parseInt(bday[0],10)  ){
          events.push({
            'title':'Birthday',
            'user':snap.child('fname').val()+" "+snap.child('lname').val(),
            'userId':snap.child('userId').val(),
            'date':parseInt(bday[0],10)+"/"+parseInt(bday[1],10)+"/"+new Date().getFullYear()
          })
        }

        if(new Date().getMonth()+1===parseInt(anniversary[1],10) && new Date().getDate()<=parseInt(anniversary[0],10) ){
          events.push({
            'title':'Work Anniversary',
            'userId':snap.child('userId').val(),
            'user':snap.child('fname').val()+" "+snap.child('lname').val(),
            'date':parseInt(anniversary[0],10)+"/"+parseInt(anniversary[1],10)+"/"+new Date().getFullYear()
          })
        }
      })
     

          
    }) ;
     this.events=events;
     
  }
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
          bday=snap.child('dob').val().split('/')
          anniversary=snap.child('doj').val().split('/')
          if(new Date().getMonth()+1===parseInt(bday[1],10) && new Date().getDate()<=parseInt(bday[0],10) ){
            bevents.push({
              'title':'Birthday',
              'user':snap.child('fname').val()+" "+snap.child('lname').val(),
              'date':parseInt(bday[0],10)+"/"+parseInt(bday[1],10)+"/"+new Date().getFullYear()
            })
          }
  
          if(new Date().getMonth()+1===parseInt(anniversary[1],10) && new Date().getDate()<=parseInt(anniversary[0],10) ){
            wevents.push({
              'title':'Work Anniversary',
              'user':snap.child('fname').val()+" "+snap.child('lname').val(),
              'date':parseInt(anniversary[0],10)+"/"+parseInt(anniversary[1],10)+"/"+new Date().getFullYear()
            })
          }
        })
       
  
            
      }) ;
       this.bevents=bevents;
       this.wevents=wevents;
       this.blength=bevents.length;
       this.wlength=wevents.length;
       console.log (" birthday event length",this.blength);
       console.log (" work annivessary  event length",this.wlength);
    await  this.firebase.database.ref(`eventTrigger/WorkEvents`).update({
        length : this.wlength,
        
       })
       await  this.firebase.database.ref(`eventTrigger/birthdayEvents`).update({
        length : this.blength,
        
       })

    }
  


}

