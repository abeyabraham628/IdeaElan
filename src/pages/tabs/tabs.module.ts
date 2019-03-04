import { Camera } from '@ionic-native/camera';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    ComponentsModule
  ],
  providers:[AngularFireStorage,Camera],
  exports:[
    TabsPage
  ]
  
})
export class TabsPageModule {
  
}
