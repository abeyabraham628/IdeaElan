import { Directive } from '@angular/core';

/**
 * Generated class for the DirectivesHasRoleDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[directives-has-role]' // Attribute selector
})
export class DirectivesHasRoleDirective {

  constructor() {
    console.log('Hello DirectivesHasRoleDirective Directive');
  }

}
