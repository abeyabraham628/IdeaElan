import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyLeavePage } from './apply-leave';
import { CustomDatePicker } from '../../models/datepicker';
import { LeaveModel } from '../../models/leave.model';


@NgModule({
  declarations: [
    ApplyLeavePage,
    
  ],
  providers: [CustomDatePicker,LeaveModel],
  imports: [
    IonicPageModule.forChild(ApplyLeavePage),
    ],

})
export class ApplyLeavePageModule {}
