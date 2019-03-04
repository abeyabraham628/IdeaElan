import { ChatbotPage } from './../chatbot/chatbot';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {  AngularFireDatabase } from '@angular/fire/database';
import {  AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AppConst } from '../../providers/strings';
import { Title } from '../../components/page-header/page-title-model';
import { DataService } from '../../providers/page-tite-service';

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
  tab0Params:any
  userId:any
  uri:any;
  hid:boolean=true;
  uname:any;
  position:any;
  
  constructor(private data:DataService,private fdb:AngularFireDatabase,public storage: AngularFireStorage,private camera: Camera,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth) {
    
    
   // alert(this.afAuth.idTokenResult);
    this.tab0Params=this.navParams.data
    this.getusername();
    this.getMessages()
    this.hid=false;
   //this.uname=this.afAuth.auth.currentUser.email
   //console.log(this.uname);
   
    this.uri=`https://firebasestorage.googleapis.com/v0/b/sopaa-b37c1.appspot.com/o/${this.afAuth.auth.currentUser.uid}.jpg?alt=media&token=36f41e79-9cfc-40c8-b4ca-192113ff40b5`
  }

  changeTitle(title){
    this.data.changeTitle(title)
  }

 async getusername(){
  var uname:any
  var position:any
    await this.fdb.database.ref(`/users/${this.afAuth.auth.currentUser.uid}`).once('value',function(snap){
      uname=snap.child('fname').val() +" "+snap.child('lname').val()
      
   
     });
     this.uname=uname;
    
    await this.fdb.database.ref(`/users/${this.afAuth.auth.currentUser.uid}`).once('value',function(snap){
      position=snap.child('position').val()
       

     });
     this.position=position;
   
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
  logout(){
    this.afAuth.auth.signOut()
            .then(() => this.navCtrl.setRoot('LoginPage'));
  }

  changepassword(){
   
    this.navCtrl.push('ChangepasswordPage');
  }

  policy(){
    this.navCtrl.push('PolicyPage');
    
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
    
  })
  
}




}
