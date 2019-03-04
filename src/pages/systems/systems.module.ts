import { CustomDatePicker } from './../../models/datepicker';
import { ComponentsModule } from './../../components/components.module';
import { NgModule, OnInit } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemsPage } from './systems';
import { MomentdatePipe } from '../../pipes/momentdate/momentdate';

@NgModule({
  declarations: [
   SystemsPage,
   MomentdatePipe
  ],
  providers:[CustomDatePicker],
  imports: [
    IonicPageModule.forChild(SystemsPage),
    ComponentsModule,
    
  ],
})
export class SystemsPageModule  {
 }

