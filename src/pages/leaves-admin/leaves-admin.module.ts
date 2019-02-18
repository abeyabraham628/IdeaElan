import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeavesAdminPage } from './leaves-admin';

@NgModule({
  declarations: [
    LeavesAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(LeavesAdminPage),
  ],
})
export class LeavesAdminPageModule {}
