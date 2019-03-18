import { DataService } from './../../providers/form-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from '@angular/fire/auth';
import {  AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
//import {TabsPage} from '../../pages/tabs/tabs'
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  task: AngularFireUploadTask;
  public itemRef: firebase.database.Reference
  progress: any;  // Observable 0 to 100

  image: string; // base64
uri:any

loader:any
  constructor(
    private view: ViewController,
    public storage: AngularFireStorage,
    public data:DataService,
    public loadingCtrl:LoadingController,
    public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private afAuth:AngularFireAuth) {
      //this.hid=false;

   
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    const getdata = this.navParams.get('mydata')
    this.uri=getdata.uri
    console.log(" hi ",getdata.uri);
  }
closemodal()
{
  this.view.dismiss();
  //this.navCtrl.push('HomePage');
  //this.view.dismiss();
}
async uploadHandler() {
  
  const base64 = await this.changeimage();
  this.createUploadTask(base64);
 
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
  
createUploadTask(file: string): void {
  this.loader=this.loadingCtrl.create({
    spinner:'dots',
    content:'Please wait...',
     dismissOnPageChange:true
   })
  this.loader.present() 
    const filePath = `${this.afAuth.auth.currentUser.uid}.jpg`;
    this.image = 'data:image/jpg;base64,' + file;
    this.uri=this.image;

    this.data.changeUri(this.uri)
    
     this.storage.ref(filePath).putString(this.image, 'data_url').then(()=>{
       this.loader.dismiss()
        this.view.dismiss();
     })
    }
  
    //this.progress = this.task.snapshotChanges().pipe(map(s => s.state));
   
  
}
