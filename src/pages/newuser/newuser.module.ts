import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewuserPage } from './newuser';
import { CustomDatePicker } from '../../models/datepicker';

@NgModule({
  declarations: [
    NewuserPage,
  ],
  providers:[CustomDatePicker],
  imports: [
    IonicPageModule.forChild(NewuserPage),
  ],
})

export class NewuserPageModule {
 
}
