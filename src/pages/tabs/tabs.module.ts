import { Camera } from '@ionic-native/camera';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
  providers:[AngularFireStorage,Camera],
  exports:[
    TabsPage
  ]
  
})
export class TabsPageModule {
  
}
