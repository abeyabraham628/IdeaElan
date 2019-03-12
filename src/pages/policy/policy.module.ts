import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyPage } from './policy';

@NgModule({
  declarations: [
    PolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(PolicyPage),
    ComponentsModule,
  ],
})
export class PolicyPageModule {}
