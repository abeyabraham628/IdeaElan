import { NgModule } from '@angular/core';
import { DirectivesHasRoleDirective } from './directives-has-role/directives-has-role';
import { DatepickerDirective } from './datepicker/datepicker';
@NgModule({
	declarations: [DirectivesHasRoleDirective,
    DatepickerDirective],
	imports: [],
	exports: [DirectivesHasRoleDirective,
    DatepickerDirective]
})
export class DirectivesModule {}
