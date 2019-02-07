import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyLeavePage } from './apply-leave';

@NgModule({
  declarations: [
    ApplyLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyLeavePage),
  ],
})
export class ApplyLeavePageModule {}
