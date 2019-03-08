import { NgModule } from '@angular/core';
import { MomentdatePipe } from './momentdate/momentdate';
import { TablefilterPipe } from './tablefilter/tablefilter';
@NgModule({
	declarations: [MomentdatePipe,
    TablefilterPipe],
	imports: [],
	exports: [MomentdatePipe,
    TablefilterPipe]
})
export class PipesModule {}
