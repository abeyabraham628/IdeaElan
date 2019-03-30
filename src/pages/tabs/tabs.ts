import { DataService } from './../../providers/form-service';
import { ChatbotPage } from './../chatbot/chatbot';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {  AngularFireDatabase } from '@angular/fire/database';
import {  AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AppConst } from '../../providers/strings';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
 
  task: AngularFireUploadTask;
  public itemRef: firebase.database.Reference
  progress: any;  // Observable 0 to 100

  image: string; // base64
  defaultImg=AppConst.logo
  tab0Root='HomePage';
  tab1Root='ApplyLeavePage';
  tab2Root=ChatbotPage;
  tab3Root='InboxPage';
  tab4Root='SupportPage';
  tab0Params:any
  messageCount:number=0
  userId:any
  uri:any;
  hid:boolean=true;
  uname:any;
  position:any;
  hideAdmin:boolean=true

  roles:any[]
  users:boolean=true
  recruitment:boolean=true
  systems:boolean=true
  policy:boolean=true
  leaveRequest:boolean=true
  sendMessage:boolean=true
  controllPanel:boolean=false
  user:any=""
  constructor(private data:DataService,private fdb:AngularFireDatabase,public storage: AngularFireStorage,private camera: Camera,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth) {
    this.roles=this.navParams.data
    
    
    this.tab0Params=this.roles
    if(this.roles[0]!="null"){
       this.user="admin" 
      this.users=false
      this.recruitment=false
      this.systems=false
      this.policy=false
      this.leaveRequest=false
      this.sendMessage=false
      this.controllPanel=true
    }

    if(this.roles[1]!="null"){
      this.leaveRequest=false
      this.controllPanel=true
    }

     if(this.roles[2]!="null"){
      this.policy=false
      this.controllPanel=true
     }
      if(this.roles[3]!="null"){
      this.sendMessage=false
      this.controllPanel=true
      }
      if(this.roles[4]!="null"){
        if(this.user!='admin')this.user="hr"
      this.recruitment=false
      this.controllPanel=true
      }
      if(this.roles[5]!="null"){
      this.systems=false
      this.controllPanel=true
      }
      if(this.roles[6]!="null"){
      this.users=false
      this.controllPanel=true
      }
    
      if(this.user=="hr" || this.user=="admin"){
        this.getSupportMessages()
      }

    this.getusername();
    this.getMessages()
    this.hid=false;
   //this.uname=this.afAuth.auth.currentUser.email
   //console.log(this.uname);
   
      
    
   
    //.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afAuth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5`
      this.data.currentUri.subscribe(item=>this.uri=item)
  }

  

 

 async getusername(){
  
    await this.fdb.database.ref(`/users/${this.afAuth.auth.currentUser.uid}`).on('value',snap=>{
      this.uname=snap.child('fname').val() +" "+snap.child('lname').val()
      this.position=snap.child('position').val()
   
     });
     
  }
  
  async changeimage()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
     mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }

    return await this.camera.getPicture(options)
}
  async logout(){
      
    alert(this.afAuth.auth.currentUser.uid);
   await this.fdb.database.ref('tokensNotificationId').orderByChild('userIdTocken').equalTo(`${this.afAuth.auth.currentUser.uid}`).once("value",(snap)=>{
    snap.forEach((child) => {
        this.fdb.object("/tokensNotificationId/"+child.key).update({ tokenid:"null",userIdTocken : this.afAuth.auth.currentUser.uid});
       })
    });


    this.afAuth.auth.signOut()
            .then(() => this.navCtrl.setRoot('LoginPage'));
  }


  changepassword(){
   
    this.navCtrl.push('ChangepasswordPage');
  }

  

  goto(page:string){
    
    this.navCtrl.push(page)
    
  }
 
  
createUploadTask(file: string): void {
this.hid=false;
  const filePath = `${this.afAuth.auth.currentUser.uid}.jpg`;
  this.image = 'data:image/jpg;base64,' + file;
  this.uri=this.image;
  this.task = this.storage.ref(filePath).putString(this.image, 'data_url');

  this.progress = this.task.percentageChanges();
}

async uploadHandler() {
 const base64 = await this.changeimage();
 this.createUploadTask(base64);

}

messages=[]
getMessages(){
  this.fdb.list(`messages/${this.afAuth.auth.currentUser.uid}`).snapshotChanges().subscribe(snap=>{
    this.messages=snap.map(item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      }

    })
    this.messageCount=0;
    for( let i=0;i<this.messages.length;i++)
      {
if(this.messages[i]['status']!='read')
this.messageCount++;
      }
    console.log("messages is ",this.messages[0]['status'])
    console.log(this.messages.length)
    console.log("actual messagecount ", this.messageCount);
  })
  
}


SupportMessages=[]
supportMessagecount:number
getSupportMessages(){
  this.fdb.list(`support`,ref=>ref.orderByChild(`recipient`).equalTo(`${this.user}`)).snapshotChanges().subscribe(snap=>{
    this.SupportMessages=snap.map(item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      }

    })

    this.supportMessagecount=0;
    
    if(this.SupportMessages.length>0){
    for( let i=0;i<this.SupportMessages.length;i++)
      {
        if((this.SupportMessages[i]['status']=='pending') || ( this.SupportMessages[i]['status']=='review'  ))
        this.supportMessagecount++;
      }
    console.log("messages is ",this.SupportMessages[0]['status'])
    console.log(this.SupportMessages.length)
    console.log("actual SUPPORT count ", this.supportMessagecount);
    }
  })
}
}
