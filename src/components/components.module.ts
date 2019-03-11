import { NgModule } from '@angular/core';

import { PageHeaderComponent } from './page-header/page-header';
import { IonicModule } from 'ionic-angular';
import { OfflineComponent } from './offline/offline';
@NgModule({
	declarations:[PageHeaderComponent,
		OfflineComponent],
	imports: [IonicModule],
	exports:[PageHeaderComponent,
		OfflineComponent]
	
})
export class ComponentsModule {}
