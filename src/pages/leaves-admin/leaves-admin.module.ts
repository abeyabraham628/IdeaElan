import { Employee } from './../../models/employee.model';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeavesAdminPage } from './leaves-admin';
import { LeaveModel } from '../../models/leave.model';
import { CustomDatePicker } from '../../models/datepicker';
@NgModule({
  declarations: [
    LeavesAdminPage,
  ],
  providers:[LeaveModel,CustomDatePicker,Employee],
  imports: [
    IonicPageModule.forChild(LeavesAdminPage),
  ],
})
export class LeavesAdminPageModule {}
