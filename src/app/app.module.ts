import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker';

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
import { ProvidersProvider } from '../providers/providers/providers';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

var config = {
  apiKey: "AIzaSyCRDymxcDEMORc4U1TjW5_SKiB22G45buM",
  authDomain: "sopaa-b37c1.firebaseapp.com",
  databaseURL: "https://sopaa-b37c1.firebaseio.com",
  projectId: "sopaa-b37c1",
  storageBucket: "",
  messagingSenderId: "500138839182"
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
    DatePicker,
    BarcodeScanner,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvidersProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
