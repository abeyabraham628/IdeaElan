import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotpasswordPage } from './forgotpassword';
import { ComponentsModule } from '../../components/components.module';




@NgModule({
  declarations: [
    ForgotpasswordPage,

  ],
 
  imports: [
    IonicPageModule.forChild(ForgotpasswordPage),
    ComponentsModule
    
  ],

})
export class ForgotpasswordPageModule {}
