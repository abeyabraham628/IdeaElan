import { DataService } from './../../providers/form-service';



import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, AlertController, ModalController, NavController, LoadingController } from 'ionic-angular';
import {FormControl, FormGroup,Validators} from '@angular/forms'
import { CustomDatePicker } from '../../models/datepicker';

import * as moment from 'moment'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';





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
  replace  :boolean=false
  formFieldVal:any
  formField:any
    systemsForm= new FormGroup({
    $key      :new FormControl(null),
    purchaseDate:new FormControl('',[Validators.required,Validators.minLength(4)]),
    systemId  :new FormControl('',[Validators.required,Validators.minLength(5)]),
    keyboard  :new FormControl('',[Validators.required,Validators.minLength(4)]),
    mouse     :new FormControl('',[Validators.required,Validators.minLength(4)]),
    processor :new FormControl('',[Validators.required,Validators.minLength(3)]),
    memory    :new FormControl('',[Validators.required,Validators.minLength(3)]),
    hdd       :new FormControl('',[Validators.required,Validators.minLength(3)]),
    avExpiry  :new FormControl('',[Validators.required,Validators.minLength(4)]),
    systemUser  :new FormControl(''),
    maintenance  :new FormControl(''),
      
   
});

  

 systems:string;

  constructor(private data:DataService,public loadingCtrl:LoadingController,public navCtrl:NavController,public modalCtrl:ModalController,public customDatePicker:CustomDatePicker ,public alertCtrl:AlertController,private barcode:BarcodeScanner,private datePicker:DatePicker,private firebase:AngularFireDatabase) {
  this.systems="newSystem";
 this.getSystemList();
 this.getUsers()
}

tony(){
 let history=this.systemsForm.controls['maintenance'].value
 this.navCtrl.push('MaintenancehistoryPage',{data:history})

}

ionViewDidLoad() {
  
  this.data.currentValue.subscribe(item=>this.formFieldVal=item)

}

ionViewWillEnter(){
  if(this.formField!=null)
  this.systemsForm.controls[this.formField].setValue(this.formFieldVal)
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
  this.replace=false
}

loadForm(systems){
   this.replace=true
  
  this.systems="newSystem";
  this.Save="Update"
  this.systemsForm.setValue(systems)
}

updateSystems(systems:any){
  
  this.systemsList.update(systems.$key,
    {
      purchaseDate:systems.purchaseDate,
      systemId  :systems.systemId,
      keyboard  :systems.keyboard,
      mouse     :systems.mouse,
      processor :systems.processor,
      memory    :systems.memory,
      hdd       :systems.hdd,
      avExpiry  :systems.avExpiry,
      

      
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
    purchaseDate:systems.purchaseDate,
    systemId:systems.systemId,
    keyboard:systems.keyboard,
    mouse:systems.mouse,
    processor:systems.processor,
    memory:systems.memory,
    hdd:systems.hdd,
    avExpiry:systems.avExpiry,
   
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
      this.datePicker.show({
        date:moment().toDate(),
        mode:'date',
        androidTheme: 5,
      }).then(
        date=>{

          if(type==="purchaseDate"){
            this.systemsForm.controls['purchaseDate'].setValue(moment(date).format('D-MMM-YYYY'))
          }
          else{
            this.systemsForm.controls['avExpiry'].setValue(moment(date).format('D-MMM-YYYY'))
          }
          
         },
        err => console.log('Error occurred while getting date: ', err)
      )
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

employeeList=[]

getUsers(){
  this.firebase.list(`users`).snapshotChanges().subscribe(list=>{
      this.employeeList=list.map(item=>{
        return{
           '$key':item.key,
          'fName':item.payload.child('fname').val(),
          'lName':item.payload.child('lname').val()
        }
       
      })
      

  })

 
}

formReset() {
  this.systemsForm.reset()
  this.replace=false
}



modify(fieldName){
  this.formField=fieldName
  let fieldVal=this.systemsForm.controls[fieldName].value
  let $key=this.systemsForm.controls['$key'].value
  let $userKey=this.systemsForm.controls['systemUser'].value
  
  this.navCtrl.push('ModifysystemsPage',{'fieldName':fieldName,'fieldVal':fieldVal,'$key':$key,'userKey':$userKey})
}
}//end of class


 


