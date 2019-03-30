import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';


import { Component, ViewChild, Input, NgZone, ChangeDetectorRef } from '@angular/core';
import { Platform, AlertController, NavController, App, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  
  
 
  isOffline:boolean=false
  showOffline:boolean=true
  rootPage:string//='LoginPage'//'ApplyLeavePage';//CompanyPolicyComponent;//HomePage
  rootParams:any
  @ViewChild('nav') nav : NavController;
  constructor(public storage:Storage,public afAuth:AngularFireAuth,public zone:NgZone,public screenOrientation:ScreenOrientation,public network:Network,public app:App,private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private alertCtrl:AlertController) {
    



    this.checkConnection();
    this.checkDisconnection();
    
    this.platform.ready().then(() => {
      
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
      
      statusBar.styleDefault();
      splashScreen.hide();

      this.platform.registerBackButtonAction(() => {
        if (this.alertShown==false) {
          this.presentConfirm();  
        }
      }, 0)
    
    });
   
    this.checkUserState()

  }
  
  checkDisconnection() {
    
    const disconnectSubscription = this.network.onDisconnect().subscribe(() => {

      this.zone.run(() => {
        this.isOffline=true
        this.showOffline=false;
        });
        
      
    this.checkConnection();
    disconnectSubscription.unsubscribe();
    
   
  });
}
checkConnection() {
 const connectSubscription = this.network.onConnect().subscribe(() => {
  
 this.checkDisconnection();
  this.zone.run(() => {
  this.isOffline=false
  this.showOffline=true;
  });
  
 connectSubscription.unsubscribe();
 
 
 
  
 });
}
public alertShown:boolean = false;

  

presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
  }

  
 checkUserState(){
    this.afAuth.auth.onAuthStateChanged(user =>{
      if (user){
        this.storage.get('roles').then(roles=>{
          if(roles){
            this.zone.run(() => {
              this.rootParams=roles
            this.rootPage='TabsPage';
              });
          }
          else{
            this.zone.run(() => {
              this.rootPage='LoginPage'
              });
           
          }
       })
      }
      else {
        this.zone.run(() => {
          this.rootPage='LoginPage'
          });
      }
    });

  }
      
      
}

