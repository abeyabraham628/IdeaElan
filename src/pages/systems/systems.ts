import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {FormControl, FormGroup,Validators} from '@angular/forms'
import { DatePipe } from '@angular/common';




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

  Save="Save"
 

    systemsForm= new FormGroup({
    $key      :new FormControl(null),
    systemId  :new FormControl(''),
    keyboard  :new FormControl(''),
    mouse     :new FormControl(''),
    processor :new FormControl(''),
    memory    :new FormControl(''),
    hdd       :new FormControl(''),
    avExpiry  :new FormControl(''),
    avValidity:new FormControl('')
});

  

 systems:string;
  constructor(private barcode:BarcodeScanner,private datePicker:DatePicker,private firebase:AngularFireDatabase,private datepipe:DatePipe) {
  this.systems="newSystem";
 this.getSystemList();
}

//systemsList:AngularFireList<any>
systemsList:AngularFireList<any>

getSystemList(){
  this.systemsList=this.firebase.list('systems')
  return this.systemsList.snapshotChanges();
}

systemArray=[];
getSystems(){
this.getSystemList().subscribe(
  list=>{
    this.systemArray=list.map(item=>{
      return{
        $key:item.key,
        ...item.payload.val()
      };
    });
  });
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
    )
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
  dispdate(){
    this.datePicker.show({
      date:new Date(),
      mode:'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date=>{
        this.systemsForm.controls['avExpiry'].setValue((date.toLocaleDateString())),
        this.systemsForm.controls['avValidity'].setValue(Math.ceil((date.getTime()-new Date().getTime())/(1000*3600*24)))
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


}//end of class


 


