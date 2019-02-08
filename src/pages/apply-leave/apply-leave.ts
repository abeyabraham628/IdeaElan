import { leaves } from './../../providers/user-leaves';
import { Component, Type } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { CalendarComponentOptions } from 'ion2-calendar';
const nodemailer = require("../../assets/nodemailer");
/**
 * Generated class for the ApplyLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html',
})
export class ApplyLeavePage {
fromDate:string;
toDate:string;
leaveList:AngularFireList<any>
leave={} as leaves
sickRemaining:number;
casualRemaining:number;
currentMonthLeave:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private datePicker:DatePicker, private firebase:AngularFireDatabase,private datepipe:DatePipe,private afauth:AngularFireAuth,private alert:AlertController) {
   
    
  }
  
 

  ionViewDidLoad() {
    this.getRamainingLeaves()
  }

  dispdate(type:String){
    this.datePicker.show({
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
  }).then(
    date=>{
     if(type==="from"){
       this.leave.dateFrom = new Date(date).toLocaleDateString()
     }
     else{
       this.leave.dateTo= new Date(date).toLocaleDateString()
     }
   },err => console.log('Error occurred while getting date: ', err)

   );
  }//end of date function

 

  
  submitLeaveRequest(){
      let uid=this.afauth.auth.currentUser.uid;
      this.leave.status="pending";
      
     if(new Date().getHours()<9){
        const alert = this.alert.create({
          title: 'Restricted',
          subTitle: 'Unable to process your request at this moment. Please contact your team leader.!',
          buttons: ['OK']
          });
        alert.present();
    }
      
    else{
      let $key=this.generateKey(this.leave.dateFrom)
      this.leave.count=this.find(this.leave.dateFrom,this.leave.dateTo)
      this.firebase.list(`EmployeeLeaves/${uid}/Leaves/${$key}`).push(this.leave);//inserting the details of leaves
     
    }//end of if else 
        
       
    }//end os submit leave request function


  pastLeaves:any[]
  
   getPastLeaves(){
    
    this.firebase.list(`EmployeeLeaves/${this.afauth.auth.currentUser.uid}/Leaves`).snapshotChanges().subscribe(
      list=>{
        this.pastLeaves=list.map(item=>{
          return{
            $key:item.key,
            ...item.payload.val()
          };
          });
      }); 
}//end of function

async getRamainingLeaves(){
  let firebase=this.firebase;
  let date:any;
  let year=new Date().getFullYear();
    if(new Date().getMonth()+1<10){
       date="0"+(new Date().getMonth()+1)+""+new Date().getFullYear()
    }
    else{ 
      date=new Date().getMonth()+1+""+new Date().getFullYear()
    }
    await firebase.database.ref(`EmployeeLeaves/FcXUquFxnfalG9DzoNi4X0CnRoG2/AvailableLeaves/${year}`).on('value',(snapshot)=>{
      this.sickRemaining=snapshot.child('sick').val()
      this.casualRemaining=snapshot.child('casual').val()
      firebase.database.ref(`EmployeeLeaves/FcXUquFxnfalG9DzoNi4X0CnRoG2/MonthlyLeaves/${date}`).on('value',(snapshot)=>{
          this.currentMonthLeave=snapshot.val();
      })

    })//end of database ref*/


}
    
  find(from?,to?){
  
    
    let dateFrom:any =from.split('/');
    let dateTo:any=to.split('/');
    let x=dateFrom[1]+dateFrom[2]
    let y=dateTo[1]+dateTo[2]


    if(dateFrom[1]!=dateTo[1]){
        

      let lastDayMonth1=new Date(dateFrom[2],dateFrom[1],0).getDate()// gethte last day of the month
      let x=lastDayMonth1+dateFrom[0]
      let monthOneCount=lastDayMonth1-dateFrom[0]+1
      let firstDayMonth2=new Date(dateTo[2],dateTo[1],1).getDate()
      let monthTwoCount=firstDayMonth2-dateTo[0]+1
        
     
      return(monthOneCount+this.currentMonthLeave)
    }
    else
        return ((dateTo[0] - dateFrom[0]+1)+ this.currentMonthLeave)
 }
 
 generateKey(date:string){
    let key=date.split('/');
   return(key[1]+key[2])
 }


 async x(){
  let account = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'zyop7y7jri6xbk4v@ethereal.email', // generated ethereal user
      pass: 'PbcuwdFYetDz4vEK6C' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"tonymanuel@ideaelan.com', // sender address
    to: "tonymanuel@ideaelan.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

 }
    

  

}// end of class
