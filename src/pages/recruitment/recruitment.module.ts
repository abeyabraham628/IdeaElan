import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecruitmentPage } from './recruitment';
import { TablefilterPipe } from '../../pipes/tablefilter/tablefilter';

@NgModule({
  declarations: [
    RecruitmentPage,
    TablefilterPipe
  ],
  imports: [
    IonicPageModule.forChild(RecruitmentPage),
    ComponentsModule
  ],
})
export class RecruitmentPageModule {}

