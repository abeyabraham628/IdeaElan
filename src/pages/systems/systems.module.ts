import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemsPage } from './systems';

@NgModule({
  declarations: [
    SystemsPage,
  ],
  imports: [
    IonicPageModule.forChild(SystemsPage),
  ],
})
export class SystemsPageModule {}
