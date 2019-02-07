import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayslipPage } from './payslip';

@NgModule({
  declarations: [
    PayslipPage,
  ],
  imports: [
    IonicPageModule.forChild(PayslipPage),
  ],
})
export class PayslipPageModule {}
