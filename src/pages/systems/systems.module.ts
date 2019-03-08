import { CustomDatePicker } from './../../models/datepicker';
import { ComponentsModule } from './../../components/components.module';
import { NgModule, OnInit } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemsPage } from './systems';
import { MomentdatePipe } from '../../pipes/momentdate/momentdate';
import { TablefilterPipe } from '../../pipes/tablefilter/tablefilter';

@NgModule({
  declarations: [
   SystemsPage,
   MomentdatePipe,
   TablefilterPipe
  ],
  providers:[CustomDatePicker],
  imports: [
    IonicPageModule.forChild(SystemsPage),
    ComponentsModule,
    
  ],
})
export class SystemsPageModule  {
 }

