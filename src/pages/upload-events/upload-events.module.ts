import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadEventsPage } from './upload-events';

@NgModule({
  declarations: [
    UploadEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadEventsPage),
  ],
})
export class UploadEventsPageModule {}
