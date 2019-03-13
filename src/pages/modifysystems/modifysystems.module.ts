import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifysystemsPage } from './modifysystems';

@NgModule({
  declarations: [
    ModifysystemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifysystemsPage),
    ComponentsModule
  ],
})
export class ModifysystemsPageModule {}
