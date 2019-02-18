import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproveLeavePage } from './approve-leave';

@NgModule({
  declarations: [
    ApproveLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(ApproveLeavePage),
  ],
})
export class ApproveLeavePageModule {}
