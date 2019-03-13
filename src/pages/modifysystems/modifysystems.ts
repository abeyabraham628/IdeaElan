import {  AngularFireDatabase } from '@angular/fire/database';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as moment from 'moment'

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
export class ModifysystemsPage {
 
  fieldName:string
  params:any
    showDefault:boolean=false;
    showSystemUser:boolean=false;
    showavExpiry:boolean=false;

    default:string;
    systemUser:string;
    avExpiry:string;
   
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public alertCtrl:AlertController) {
    this.getUsers()  
    this.params=navParams.data
    

      
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
  switch(this.params.fieldName){

    case 'keyboard' : 
    case 'mouse'    : 
    case 'processor': 
    case 'hdd'      : 
    case 'memory'   : value=this.default;break
    case 'avExpiry' : value=this.avExpiry;break;
    case 'systemUser':value=this.systemUser;break;   
  }
    
      this.firebase.list(`systems/${this.params.$key}/maintenance`).push({
        [this.params.fieldName]:value,
        date:moment().format('D-MMM-YYYY'),
        user:this.params.userKey!=this.systemUser?this.params.userKey:value
      }).then(()=>{
        this.firebase.list(`systems`).update(this.params.$key,{
          [this.params.fieldName]:value
        }).then(()=>{
          let alert=this.alertCtrl.create({
            title:"Success",
            message:this.fieldName+" updated successfully"
          })
          alert.present();
          this.navCtrl.pop()
        })
      })
        
        
     
  }

 /* case 'keyboard' : this.fieldName='Key Board';
  this.firebase.list(`systems`).update(data.$key,{
      keyboard:data.keyboard
  })*/
}







