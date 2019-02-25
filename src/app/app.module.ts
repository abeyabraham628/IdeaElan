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
import { ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CalendarModule } from "ion2-calendar";
import { MyApp } from './app.component';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFirestore } from '@angular/fire/firestore';
import { FIREBASE_CONFIG } from '../providers/firebase-service'
import {  AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FCM } from '@ionic-native/fcm';
import { Push } from '@ionic-native/push';
@NgModule({
  declarations: [
    MyApp,
 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    AngularFireAuthModule,
    CalendarModule

    
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    Push,
    FCM,
    StatusBar,
    Firebase,
    SplashScreen,
    DatePicker,
    BarcodeScanner,
    DatePipe,
    Camera,
    AngularFirestore,
    AngularFireStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
