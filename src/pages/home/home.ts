import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
userId:any
roles:any[]
users:boolean=true
recruitment:boolean=true
systems:boolean=true
uploadPaySlip:boolean=true
leaveRequest:boolean=true
uploadEvent:boolean=true
loader:any

  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private firebase:AngularFireDatabase,public loadingCtrl: LoadingController) {
   
  
  
  }
  
  
   asyncionViewDidLoad() {

   this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration:5000
    });
    this.loader.present();
    
    
  /*this.roles=privilleges
    
      if(this.roles[0]!=null){
        console.log(true)
      this.users=false
      this.recruitment=false
      this.systems=false
      this.uploadPaySlip=false
      this.leaveRequest=false
      this.uploadEvent=false
    }

    /*if(this.roles[1]!=null)
      this.leaveRequest=false

     // if(this.roles[2]!=null)
      //this.leaveRequest=false
      if(this.roles[3]!=null)
      this.uploadPaySlip=false
      if(this.roles[4]!=null)
      this.recruitment=false
      if(this.roles[5]!=null)
      this.systems=false
      if(this.roles[6]!=null)
      this.users=false*/
     
  }
  goto(page:string){
    console.log(page)
    this.navCtrl.push(page);
  }

 

}
