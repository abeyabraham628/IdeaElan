import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewSummaryPage } from './interview-summary';

@NgModule({
  declarations: [
    InterviewSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(InterviewSummaryPage),
    ComponentsModule,
  ],
})
export class InterviewSummaryPageModule {}
