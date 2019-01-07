import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {FormControl, FormGroup,Validators} from '@angular/forms'
import { createLoweredSymbol } from '@angular/compiler';


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

    systemsForm= new FormGroup({
    
    $key      :new FormControl(null),
    systemId  :new FormControl(''),
    keyboard:new FormControl(''),
    mouse   :new FormControl(''),
    processor :new FormControl(''),
    memory    :new FormControl(''),
    hdd       :new FormControl(''),
    avExpiry  :new FormControl('')
});

  

 systems:string;
  constructor(private barcode:BarcodeScanner,private datePicker:DatePicker,private firebase:AngularFireDatabase) {
  this.systems="newSystem";
  this.getSystemList();
}

systemsList:AngularFireList<any>

getSystemList(){
  this.systemsList=this.firebase.list('systems')
  return this.systemsList.snapshotChanges();
}

insertSystems(systems:any){
  this.systemsList.push({
    systemId:systems.systemId,
    keyboard:systems.keyboard,
    mouse:systems.mouse,
    processor:systems.processor,
    memory:systems.memory,
    hdd:systems.hdd,
    avExpiry:systems.avExpiry


  })
}

  onSubmit(){
   
    if(this.systemsForm.controls.$key.value==null){
     this.insertSystems(this.systemsForm.value)
    this.systemsForm.reset();
    }
    else{
      
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
     }).catch(err => {
         console.log('Error', err);
     });
  }

  dispdate(){
    this.datePicker.show({
      date:new Date(),
      mode:'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date=>{
        this.systemsForm.controls['avExpiry'].setValue(new Date(date).toLocaleDateString())
        
      },
      err => console.log('Error occurred while getting date: ', err)
    )
  }

 

}
