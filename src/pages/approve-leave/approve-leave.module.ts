import { LeaveModel } from './../../models/leave.model';
import { CustomDatePicker } from './../../models/datepicker';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproveLeavePage } from './approve-leave';

@NgModule({
  declarations: [
    ApproveLeavePage,
  ],
  providers:[CustomDatePicker,LeaveModel],
  imports: [
    IonicPageModule.forChild(ApproveLeavePage),
  ],
})
export class ApproveLeavePageModule {}
