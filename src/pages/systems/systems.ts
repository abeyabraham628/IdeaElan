

import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, AlertController, ModalController, NavController, LoadingController } from 'ionic-angular';
import {FormControl, FormGroup,Validators} from '@angular/forms'
import { CustomDatePicker } from '../../models/datepicker';
import { CalendarModal,CalendarResult} from "ion2-calendar";
import * as moment from 'moment'




/**
 * Generated class for the SystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-systems',
  templateUrl: 'systems.html',
})
export class SystemsPage {
  searchString: string;
  loader:any;
  Save="Save"
    
    systemsForm= new FormGroup({
    $key      :new FormControl(null),
    systemId  :new FormControl('',[Validators.required,Validators.minLength(5)]),
    keyboard  :new FormControl('',[Validators.required,Validators.minLength(4)]),
    mouse     :new FormControl('',[Validators.required,Validators.minLength(4)]),

    processor :new FormControl('',[Validators.required,Validators.minLength(4)]),
    memory    :new FormControl('',[Validators.required,Validators.minLength(3)]),
    hdd       :new FormControl('',[Validators.required,Validators.minLength(3)]),
    avExpiry  :new FormControl('',[Validators.required,Validators.minLength(4)]),
    avValidity:new FormControl('',[Validators.required,Validators.minLength(4)]),
      
   
});

  

 systems:string;
  constructor(public loadingCtrl:LoadingController,public navCtrl:NavController,public modalCtrl:ModalController,public customDatePicker:CustomDatePicker ,public alertCtrl:AlertController,private barcode:BarcodeScanner,private datePicker:DatePicker,private firebase:AngularFireDatabase) {
  this.systems="newSystem";
 this.getSystemList();
}


ionViewDidLeave() {
  this.navCtrl.popToRoot();
}

//systemsList:AngularFireList<any>
systemsList:AngularFireList<any>

getSystemList(){
  this.systemsList=this.firebase.list('systems')
  return this.systemsList.snapshotChanges();
}

systemArray=[];
getSystems(){
  this.loader=this.loadingCtrl.create({
    spinner:'dots',
    content:'Loading',
     dismissOnPageChange:true
   })
  this.loader.present()
  this.systemsForm.reset();
this.getSystemList().subscribe(
  list=>{
    this.systemArray=list.map(item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      };
     
    });
  
  });
  this.loader.dismiss()
}

loadForm(systems){
  this.systems="newSystem";
  this.Save="Update"
  this.systemsForm.setValue(systems)
}

updateSystems(systems:any){
  
  this.systemsList.update(systems.$key,
    {
      systemId  :systems.systemId,
      keyboard  :systems.keyboard,
      mouse     :systems.mouse,
      processor :systems.processor,
      memory    :systems.memory,
      hdd       :systems.hdd,
      avExpiry  :systems.avExpiry,
      avValidity:systems.avValidity
    }
    ).then(()=>{
      let alert = this.alertCtrl.create({
        title: "Success",
        subTitle: "System updated succesfuly ",
        buttons: ['OK']
      });
      
      alert.present();
    })
}


insertSystems(systems:any){
  this.systemsList.push({
    systemId:systems.systemId,
    keyboard:systems.keyboard,
    mouse:systems.mouse,
    processor:systems.processor,
    memory:systems.memory,
    hdd:systems.hdd,
    avExpiry:systems.avExpiry,
    avValidity: systems.avValidity
}).then(()=>{
  let alert = this.alertCtrl.create({
    title: "Success",
    subTitle: "System added succesfuly ",
    buttons: ['OK']
  });
  
  alert.present();
})
}

  onSubmit(){
   
    if(this.systemsForm.controls.$key.value==null){
      this.insertSystems(this.systemsForm.value)
      this.systemsForm.reset();
    }
    else{
      this.updateSystems(this.systemsForm.value)
      this.systemsForm.reset();
    }
    
  }
  

 scanBarCode(type:string){
    this.barcode.scan().then(barcodeData => {
      if(type=="system"){
        

      this.systemsForm.controls['systemId'].setValue(barcodeData.text);
      }
      else if(type=="keyboard"){
        this.systemsForm.controls['keyboard'].setValue(barcodeData.text);
      }
      else if(type=="mouse"){
        this.systemsForm.controls['mouse'].setValue(barcodeData.text);
      }

      else if(type=="db"){
        this.findSystem(barcodeData.text)
      }


     }).catch(err => {
         console.log('Error', err);
     });
  }
  AvValidity:any
  dispdate(type){
    let pickMode='single'
    var defaultScrollTo=new Date()
      let from=new Date('2/1/2019')
      var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from)
       
      let myCalendar =  this.modalCtrl.create(CalendarModal, {
       options: options,
       });
          
       myCalendar.present();
        
       myCalendar.onDidDismiss((date: CalendarResult[]) => {
        
         
         if(date!=null){
          this.systemsForm.controls['avExpiry'].setValue(moment(date['time']).format('D-MMM-YYYY'))
          //this.systemsForm.controls['avValidity'].setValue(Math.ceil((date.getTime()-new Date().getTime())/(1000*3600*24)))
        }
      
      
      })//end of displayCalendar function
    }




  findSystem(systemId:any){
    var result=[];
    this.firebase.database.ref("systems").orderByChild('systemId').equalTo(systemId).on("value",function(snapshot) {
       
          snapshot.forEach(function(childSnapshot) {
          result={
           $key:childSnapshot.key,
           ...childSnapshot.val()

            }
            return false;

         });
         
    });
    this.loadForm(result);
}//end of function

}//end of class


 


