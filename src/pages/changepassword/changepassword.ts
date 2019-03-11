import { AppConst } from './../../providers/strings';
import { FormGroup, Validators, FormControl,ValidatorFn,AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})


export class ChangepasswordPage {
  private password:string;
  existingUser:any
  companyLogo:string=AppConst.passwordImg
  constructor(public toast:ToastController,public navCtrl: NavController, public navParams: NavParams,private afAuth:AngularFireAuth,private firebase:AngularFireDatabase) {
    this.existingUser=this.navParams.get('existingUser')
    
  }

 
  ionViewDidLeave() {
    //this.navCtrl.popToRoot();
  }

  changePasswordForm=new FormGroup({
   
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15), this.equalto('password')])

  })
  
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let input = control.value;
        let isValid = control.root.value[field_name] == input;
        if (!isValid)
            return {'equalTo': {isValid}};
        else
            return null;
    };
}


  async updatePassword(formValue){
 
   
    var user = this.afAuth.auth.currentUser;
    var newPassword = formValue.password;
    var firebase=this.firebase;
    var navCtrl=this.navCtrl;
    var toastCtrl= this.toast
    if(this.existingUser==null){
      user.updatePassword(newPassword).then(()=>{
        this.afAuth.auth.signOut()
            .then(() => {
              const toast = toastCtrl.create({
                message: 'Password Updated Successfully. Please login to continue',
                duration: 5000
              });
              toast.present().then(()=>navCtrl.setRoot('LoginPage'));
              
              
      })
    })
  }
  
    else if(!this.existingUser){
    user.updatePassword(newPassword).then(function() {

     firebase.object(`TempLogin/${user.uid}`).set({
        status : "Set",
     }
    ).then(async function(){
        
          var privilleges=[]
          
          const priv= await firebase.database.ref(`users/${user.uid}`).child('data').once('value',(snapshot)=>{
           privilleges=snapshot.val()
          })
          navCtrl.push('TabsPage',{'roles': privilleges})




    });// end of push
      
    }).catch(function(error) {
      alert(error)
    });
  
  }
}


  cancel(){
    this.navCtrl.pop()
  }

}
