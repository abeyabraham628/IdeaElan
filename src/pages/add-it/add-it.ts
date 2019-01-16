import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * \
 * import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
 * 
 * 
 * 
 * 
 * 
 * 
 * Generated class for the AddItPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-it',
  templateUrl: 'add-it.html',
})
export class AddItPage {


  @ViewChild("SystemSerialNumber") SystemSerialNumber;
@ViewChild("CPUSerialNumber") CPUSerialNumber;
@ViewChild("RAMSize") RAMSize;
@ViewChild("Harddisksize") Harddisksize;
@ViewChild("KeyboardSerialNumber") KeyboardSerialNumber;
@ViewChild("mouseSerialNumber") mouseSerialNumber;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams,
     private http: Http,  public loading: LoadingController) {
  }
  //, private barcodeScanner: BarcodeScanner
additem()
{  if(this.SystemSerialNumber.value=="" ){

  let alert = this.alertCtrl.create({
 
  title:"ATTENTION",
  subTitle:"SystemSerialNumberfield is empty",
  buttons: ['OK']
  });
 
  alert.present();
   } else
  if(this.CPUSerialNumber.value==""){
 
  let alert = this.alertCtrl.create({
 
  title:"ATTENTION",
  subTitle:"CPUSerialNumber field is empty",
  buttons: ['OK']
  });
 
  alert.present();
       
 }
  else 
   if(this.RAMSize.value=="" ){
 
  let alert = this.alertCtrl.create({
 
  title:"ATTENTION",
  subTitle:"RAMSize field is empty",
  buttons: ['OK']
  });
 
  alert.present();
   } else
  if(this.Harddisksize.value==""){
 
  let alert = this.alertCtrl.create({
 
  title:"ATTENTION",
  subTitle:"Harddisksize field is empty",
  buttons: ['OK']
  });
 
  alert.present();
       
 }
  else 
  if(this.KeyboardSerialNumber.value==""){
 
    let alert = this.alertCtrl.create({
   
    title:"ATTENTION",
    subTitle:"KeyboardSerialNumber field is empty",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
else
if(this.mouseSerialNumber.value==""){
 
  let alert = this.alertCtrl.create({
 
  title:"ATTENTION",
  subTitle:"mouseSerialNumber field is empty",
  buttons: ['OK']
  });
 
  alert.present();
       
 }
 else
  {
 
 
 var headers = new Headers();
     headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
     let options = new RequestOptions({ headers: headers });
 
   let data = {
    SystemSerialNumber: this.SystemSerialNumber.value,
    CPUSerialNumber: this.CPUSerialNumber.value,
    RAMSize: this. RAMSize.value,
    Harddisksize: this.Harddisksize.value ,      
    KeyboardSerialNumber: this.KeyboardSerialNumber.value ,
    mouseSerialNumber: this.mouseSerialNumber.value  
       };
 
 
  let loader = this.loading.create({
     content: 'Processing please wait...',
   });
 
  loader.present().then(() => {
 this.http.post('http://192.168.0.5:8080/project/addIT.php',data, options)
 .map(res => res.json())
 .subscribe(res => {
 
  loader.dismiss()
 if(res=="System details added  successfull"){
   let alert = this.alertCtrl.create({
     title:"CONGRATS",
     subTitle:(res),
     buttons: ['OK']
     });
    
     alert.present();
  this.navCtrl.push(HomePage);
 
 }else
 {
  let alert = this.alertCtrl.create({
  title:"CONGRATS",
  subTitle:(res),
  buttons: ['OK']
  });
 
  alert.present();
   } 
 });
 });
  }
 
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItPage');
  }

item(){
 //this.barcodeScanner.scan().then(barcodeData => {
  // console.log('Barcode data', barcodeData);
   //}).catch(err => {
   //   console.log('Error', err);
 // });
}

}
