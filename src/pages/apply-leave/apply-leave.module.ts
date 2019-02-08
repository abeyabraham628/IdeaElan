import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyLeavePage } from './apply-leave';
//import { CalendarModule } from 'ion2-calendar';
@NgModule({
  declarations: [
    ApplyLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyLeavePage),
    //CalendarModule
  ],
})
export class ApplyLeavePageModule {}
