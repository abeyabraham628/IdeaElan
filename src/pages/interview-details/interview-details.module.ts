import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewDetailsPage } from './interview-details';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InterviewDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(InterviewDetailsPage),
    ComponentsModule
  ],
})
export class InterviewDetailsPageModule {}
