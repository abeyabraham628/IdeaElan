import { ModifysystemsPage } from './../modifysystems/modifysystems';
import { CustomDatePicker } from './../../models/datepicker';
import { ComponentsModule } from './../../components/components.module';
import { NgModule, OnInit } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemsPage } from './systems';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
   SystemsPage,
  ],
  providers:[CustomDatePicker],
  imports: [
    IonicPageModule.forChild(SystemsPage),
    ComponentsModule,
    PipesModule,
    
    
    
   ],
})
export class SystemsPageModule  {
 }

