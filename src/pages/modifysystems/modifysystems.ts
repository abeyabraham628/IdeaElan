import { concatAll } from 'rxjs/operators';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DatePicker } from '@ionic-native/date-picker';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {  AngularFireDatabase } from '@angular/fire/database';

import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as moment from 'moment'
import { DataService } from '../../providers/form-service';

/**
 * Generated class for the ModifysystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifysystems',
  templateUrl: 'modifysystems.html',
})
@Injectable()
export class ModifysystemsPage {
 
  fieldName:string
  params:any
    showDefault:boolean=false;
    showSystemUser:boolean=false;
    showavExpiry:boolean=false;

    default:string;
    systemUser:string;
    avExpiry:string;
   
  constructor(public barcode:BarcodeScanner,public datePicker:DatePicker,public formData:DataService,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public alertCtrl:AlertController) {
    this.getUsers()  
    this.params=navParams.data[0]
   
      
  }

  ionViewDidLoad() {
    
    switch(this.params.fieldName){
      case 'keyboard' : this.fieldName='Key Board';
                        this.default=this.params.fieldVal
                        
                        this.showDefault=true
                        break;
      case 'mouse'    : this.fieldName='Mouse';
                        this.default=this.params.fieldVal
                        this.showDefault=true
                        break;
      case 'processor': this.fieldName='Processor';
                        this.default=this.params.fieldVal
                        this.showDefault=true
                        break;
      case 'hdd'      : this.fieldName='Hard Disk';
                        this.default=this.params.fieldVal
                        this.showDefault=true
                        break;
      case 'memory'   : this.fieldName='Ram';
                        this.default=this.params.fieldVal
                        this.showDefault=true
                        break;
      case 'avExpiry' : this.fieldName='Antivirus Expiry';
                        this.avExpiry=this.params.fieldVal
                        this.showavExpiry=true
                        break;
      case 'systemUser': this.fieldName='System User';
                        this.systemUser=this.params.fieldVal
                        this.showSystemUser=true
                        break;   
      

}
    
  }

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

updateSystems(){
  let value:string
  var flag:boolean=false
  var uname:any
  switch(this.params.fieldName){

    case 'keyboard' : 
    case 'mouse'    : 
    case 'processor': 
    case 'hdd'      : 
    case 'memory'   : value=this.default;break
    case 'avExpiry' : value=this.avExpiry;break;
    case 'systemUser': flag=true
                      value=this.systemUser;
                       let empObj=this.employeeList.find(key=>key.$key==this.systemUser)
                        uname=empObj.fName+" "+empObj.lName;
                         
                      break;   
  }
    
      this.firebase.list(`maintenance/${this.params.$key}`).push({
        'type':{'name':this.params.fieldName,'value':flag?uname:value},
        
        date:moment().format('D-MMM-YYYY'),
        userKey:this.params.userKey!=this.systemUser?this.params.userKey:value,
        userName:this.params.userName
      }).then(()=>{
        this.firebase.list(`systems`).update(this.params.$key,{
          [this.params.fieldName]:value
        }).then(()=>{
          let alert=this.alertCtrl.create({
            title:"Success",
            message:this.fieldName+" updated successfully",
            buttons: [{
            text:'OK',
            handler:()=>{
              this.formData.changeValue(value)
              this.navCtrl.pop()
            }
            }]
          })
          alert.present();
         
        })
      })
        
        
     
  }

  dispdate(){
    this.datePicker.show({
      date:moment().toDate(),
      mode:'date',
      androidTheme: 5,
    }).then(
      date=>{
          this.avExpiry=moment(date).format('D-MMM-YYYY')
        },
      err => console.log('Error occurred while getting date: ', err)
    )
  }

  scanBarCode(type:string){
    this.barcode.scan().then(barcodeData => {
      this.default=barcodeData.text
     }).catch(err => {
         console.log('Error', err);
     });
  }


}







