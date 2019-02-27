
import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'LoginPage'//'ApplyLeavePage';//CompanyPolicyComponent;//HomePage
  @ViewChild('nav') navCtrl: NavController;

  constructor(public app:App,private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private alertCtrl:AlertController) {
  platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
     
    });
    this.ngOnInit()
   

  }

  ngOnInit() {
    this.platform.registerBackButtonAction(() => {
      let activeNav = this.app.getActiveNav();
      if (activeNav.canGoBack()) {
        this.navCtrl.pop();
      } else {
        // Currently on root page
        this.appClosePromt();
      }
    }, 1);
  }

  appClosePromt() {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Do you want to close the application?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Dismiss
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();  
  }
 
}

