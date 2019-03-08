import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  roles:any[]
  users:boolean=true
  recruitment:boolean=true
  systems:boolean=true
  policy:boolean=true
  leaveRequest:boolean=true
  sendMessage:boolean=true

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.roles=navParams.get('roles')
    
    
     if(this.roles[0]!="null"){
        
      this.users=false
      this.recruitment=false
      this.systems=false
      this.policy=false
      this.leaveRequest=false
      this.sendMessage=false
    }

    if(this.roles[1]!="null")
      this.leaveRequest=false

     if(this.roles[2]!=null)
      this.policy=false
      if(this.roles[3]!="null")
      this.sendMessage=false
      if(this.roles[4]!="null")
      this.recruitment=false
      if(this.roles[5]!="null")
      this.systems=false
      if(this.roles[6]!="null")
      this.users=false
  }

  goto(page:string){
   
    this.navCtrl.push(page)
    
  }

}
