import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { LoadingController } from 'ionic-angular';
import {FCM} from '@ionic-native/fcm'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
uploadPaySlip:boolean=true
leaveRequest:boolean=true
uploadEvent:boolean=true
loader:any
devicetoken:any
  constructor(private fcm:FCM,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private firebase:AngularFireDatabase,public loadingCtrl: LoadingController) {
   
    /*this.fcm.getToken().then(token => {
      //backend.registerToken(token);
      this.devicetoken=token;
      alert(token);
    });
    this.fcm.onTokenRefresh().subscribe(token => {
      this.devicetoken=token;
      alert("updated");
    });
    this.checks();*/
    
    
    this.roles=navParams.get('roles')
    
     if(this.roles[0]!="null"){
        
      this.users=false
      this.recruitment=false
      this.systems=false
      this.uploadPaySlip=false
      this.leaveRequest=false
      this.uploadEvent=false
    }

    if(this.roles[1]!="null")
      this.leaveRequest=false

     // if(this.roles[2]!=null)
      //this.leaveRequest=false
      if(this.roles[3]!="null")
      this.uploadPaySlip=false
      if(this.roles[4]!="null")
      this.recruitment=false
      if(this.roles[5]!="null")
      this.systems=false
      if(this.roles[6]!="null")
      this.users=false
     
  }

  checks(){
    var idOftoken , tokenStatus;
    this.firebase.database.ref('tokensNotificationId').orderByChild('userIdTocken').equalTo(`${this.afAuth.auth.currentUser.uid}`).once("value",(snap)=>{
     // console.log(snap.val())
     snap.forEach((child) => {
       if(child.child('tokenid').val()=="null")
       {
         console.log("if yes update it with device token");
         this.firebase.object("/tokensNotificationId/"+child.key)

            .update({ tokenid:this.devicetoken,userIdTocken : this.afAuth.auth.currentUser.uid});
       }
       console.log(child.child('userIdTocken').val());
      console.log(child.key);
     })

//if not exsist , needed to be added , but already user will have an entry to token list as it is added in newuser.ts file 
  
      
      });
    }
 
   ionViewDidLoad() {

    this.getMessages()
    this.getUpComingEvents()
   }

  goto(page:string){
    this.navCtrl.push(page);
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
            'date':parseInt(bday[0],10)+"/"+parseInt(bday[1],10)+"/"+new Date().getFullYear()
          })
        }

        if(new Date().getMonth()+1===parseInt(anniversary[1],10) && new Date().getDate()<=parseInt(anniversary[0],10) ){
          events.push({
            'title':'Work Anniversary',
            'user':snap.child('fname').val()+" "+snap.child('lname').val(),
            'date':parseInt(anniversary[0],10)+"/"+parseInt(anniversary[1],10)+"/"+new Date().getFullYear()
          })
        }
      })
     

          
    }) ;
     this.events=events;
     
  }
  


}

