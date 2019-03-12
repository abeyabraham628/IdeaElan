import { NgModule } from '@angular/core';

import { PageHeaderComponent } from './page-header/page-header';
import { IonicModule } from 'ionic-angular';
import { OfflineComponent } from './offline/offline';
import { NavbarComponent } from './navbar/navbar';
@NgModule({
	declarations:[PageHeaderComponent,
		OfflineComponent,
    NavbarComponent],
	imports: [IonicModule],
	exports:[PageHeaderComponent,
		OfflineComponent,
    NavbarComponent]
	
})
export class ComponentsModule {}
