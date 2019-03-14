import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintenancehistoryPage } from './maintenancehistory';

@NgModule({
  declarations: [
    MaintenancehistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintenancehistoryPage),
    ComponentsModule
  ],
})
export class MaintenancehistoryPageModule {}
