import { AppConst } from './../providers/strings';
import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, NavController, App, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { ScreenOrientation } from '@ionic-native/screen-orientation';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('tony') navCtrl: Nav;
  rootPage:string = 'LoginPage'//'ApplyLeavePage';//CompanyPolicyComponent;//HomePage
  

  constructor(public screenOrientation:ScreenOrientation,public network:Network,public app:App,private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private alertCtrl:AlertController) {
    
   
    this.platform.ready().then(() => {
      //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
      this.checkDisconnection();
      statusBar.styleDefault();
      splashScreen.hide();
          
    });
   
   

  }
  
  checkDisconnection() {
    
    const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    this.checkConnection();
    disconnectSubscription.unsubscribe();
  
   
    this.navCtrl.push('NointernetPage');
   
  });
}
checkConnection() {
 const connectSubscription = this.network.onConnect().subscribe(() => {
 this.checkDisconnection();
 connectSubscription.unsubscribe();
 
  //this.navCtrl.pop();
 });
}

  ngOnInit() {
    this.platform.registerBackButtonAction(() => {
      let activeNav = this.app.getActiveNav();
     alert(activeNav.name)
      if (activeNav.canGoBack()) {
        this.navCtrl.pop();
      } else {
        // Currently on root page
        //this.appClosePromt();
      }
    }, 1);
  }

  
 
}

