
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
import {ReactiveFormsModule} from '@angular/forms'
import { DatePipe } from '@angular/common';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireModule } from '@angular/fire';

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
import { InterviewDetailsPage } from '../pages/interview-details/interview-details';
import { InterviewSummaryPage } from '../pages/interview-summary/interview-summary';



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
    AddItPage,
    RecruitmentPage,
    TabsPage,
    NewuserPage,
    BotabsPage,
    SystemsPage,
    InterviewDetailsPage,
    InterviewSummaryPage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
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
    RecruitmentPage,
    InterviewDetailsPage,
    InterviewSummaryPage
   
  ],
  providers: [
    StatusBar,
    Firebase,
    SplashScreen,
    DatePicker,
    BarcodeScanner,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
