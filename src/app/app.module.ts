import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { AddItPage } from '../pages/add-it/add-it';
import { TabsPage } from '../pages/tabs/tabs';
import { NewuserPage } from '../pages/newuser/newuser';

import { BotabsPage } from '../pages/botabs/botabs';
import {SystemsPage} from '../pages/systems/systems';
import {RecruitmentPage} from '../pages/recruitment/recruitment';
import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database';
var config = {
  apiKey: "AIzaSyDMKLi6y817JKgy6wEGaFKXFq6pjhbEXOs",
  authDomain: "dddddddddddddddddd-56957.firebaseapp.com",
  databaseURL: "https://dddddddddddddddddd-56957.firebaseio.com",
  projectId: "dddddddddddddddddd-56957",
  storageBucket: "dddddddddddddddddd-56957.appspot.com",
  messagingSenderId: "511075654805"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ProfilePage,
    AddItPage,RecruitmentPage,
    TabsPage,NewuserPage,
   
    BotabsPage,SystemsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ProfilePage,
    AddItPage,
    TabsPage,
    NewuserPage,
   BotabsPage,SystemsPage,
   RecruitmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
