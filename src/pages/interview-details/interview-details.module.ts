import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewDetailsPage } from './interview-details';

@NgModule({
  declarations: [
    InterviewDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(InterviewDetailsPage),
  ],
})
export class InterviewDetailsPageModule {}
