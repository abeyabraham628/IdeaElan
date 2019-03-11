import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecruitmentPage } from './recruitment';


@NgModule({
  declarations: [
    RecruitmentPage,
   ],

  imports: [
    IonicPageModule.forChild(RecruitmentPage),
    ComponentsModule,
    PipesModule
  ],
})
export class RecruitmentPageModule {}

