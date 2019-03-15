import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportPage } from './support';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SupportPage,
  ],
  imports: [
    IonicPageModule.forChild(SupportPage),
    ComponentsModule
  ],
})
export class SupportPageModule {}
