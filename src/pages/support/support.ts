import { AngularFireAuth } from '@angular/fire/auth';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
support:string
subjectErr:boolean=true
commentErr:boolean=true
recpErr:boolean=true
subject:string
matter:string
recipient:string
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public firebase:AngularFireDatabase,public afAuth:AngularFireAuth) {
    this.support="newIssue"
    this.getMyRequests()
  }

  ionViewDidLeave(){
    this.navCtrl.popToRoot()
  }
  

  contactSupport(){
    
    this.subject==null?this.subjectErr=false:this.subjectErr=true;
    this.matter==null?this.commentErr=false:this.commentErr=true
    this.recipient==null?this.recpErr=false:this.recpErr=true
    
    if(this.subjectErr&& this.commentErr&& this.recpErr){
      this.firebase.list(`support/${this.recipient}`).push({
        subject:this.subject,
        matter:this.matter,
        recipient:this.recipient,
        userId:this.afAuth.auth.currentUser.uid,
        date:moment().format('D-MMM-YYYY'),
        time:moment().format('h:mm a'),
        status:'Pending'
      }).then(()=>{
        let toast=this.toastCtrl.create({
            message:"Issue submitted successfully",
            duration:3000
        })
        toast.present()
        this.resetFields()
      })
    }
    

  }

  resetFields(){
    this.subject=this.recipient=this.matter=null
    this.recpErr=this.subjectErr=this.commentErr=true
  }

  myRequests=[]
  getMyRequests(){
    this.firebase.database.ref(`support`).on('value',(snap)=>{
      snap.forEach((child)=>{
          child.forEach(item=>{
            if(item.child('userId').val()===this.afAuth.auth.currentUser.uid){
              this.myRequests.push(item.val())
            }
          })
      })
    })
    
  }

}
