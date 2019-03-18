import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewSchedulePage } from './interview-schedule';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InterviewSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(InterviewSchedulePage),
    ComponentsModule

  ],
})
export class InterviewSchedulePageModule {}
