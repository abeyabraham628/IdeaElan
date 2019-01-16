import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItPage } from './add-it';


@NgModule({
  declarations: [
    AddItPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItPage),
  ],
})
export class AddItPageModule {}
