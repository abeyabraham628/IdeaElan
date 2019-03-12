import { Component, Input } from '@angular/core';

/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbar',
  template: `<ion-navbar color="blue">
                <ion-title>
                  {{this.pageTitle}}
                </ion-title>
               </ion-navbar>`
})
export class NavbarComponent {
  @Input('pageTitle') pageTitle:string 
  

  constructor() {
    
    
  }

}
