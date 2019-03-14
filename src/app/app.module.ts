import { PipesModule } from './../pipes/pipes.module';
import { MomentdatePipe } from './../pipes/momentdate/momentdate';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DatepickerDirective } from './../directives/datepicker/datepicker';

import { ChatbotPage } from './../pages/chatbot/chatbot';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { DatePicker } from '@ionic-native/date-picker';
import { ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CalendarModule } from "ion2-calendar";

import { MyApp } from './app.component';

import { FIREBASE_CONFIG } from '../providers/firebase-service'
import {FCM} from '@ionic-native/fcm'
import { IonicStorageModule } from '@ionic/storage';
import { ComponentsModule } from '../components/components.module';
import { DataService } from '../providers/form-service';
import { Network } from '@ionic-native/network';





@NgModule({
  declarations: [
    MyApp,
    ChatbotPage,
    
    
    ],

  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {navExitApp: false}),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    ReactiveFormsModule,
    AngularFireAuthModule,
    CalendarModule,
    ComponentsModule,
    
    
    
    
  
    
   
   ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatbotPage,

    
    
  ],
  providers: [
    StatusBar,
    Firebase,
    SplashScreen,
    DatePicker,
    BarcodeScanner,
    DatePipe,
    FCM,
    DataService,
    Network,
    ScreenOrientation,
    
    

    
    
   {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
