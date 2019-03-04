import { DatepickerDirective } from './../../directives/datepicker/datepicker';

import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewuserPage } from './newuser';
import { CustomDatePicker } from '../../models/datepicker';

@NgModule({
  declarations: [
    NewuserPage,
    DatepickerDirective
  ],
  providers:[CustomDatePicker],
  imports: [
    IonicPageModule.forChild(NewuserPage),
    ComponentsModule,
    
  ],
})

export class NewuserPageModule {
 
}
