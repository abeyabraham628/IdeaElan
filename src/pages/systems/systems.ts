import { DatePicker } from '@ionic-native/date-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
 systems:String;
 systemId:any;
 keyboardId:any;
 mouseId:any;
 avExpiry:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barcode:BarcodeScanner,private datePicker:DatePicker) {
    this.systems="newSystem"
}

  scanBarCode(type:string){
    this.barcode.scan().then(barcodeData => {
      if(type=="system"){
      this.systemId=barcodeData.text
      }
      else if(type=="keyboard"){
        this.keyboardId=barcodeData.text
      }
      else if(type=="mouse"){
        this.mouseId=barcodeData.text
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
        this.avExpiry= new Date(date).toLocaleDateString()
        
      },
      err => console.log('Error occurred while getting date: ', err)
    )
  }

 

}
