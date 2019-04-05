//Author Tony Manuel

import { AppConst } from './../../providers/strings';
import { Component } from '@angular/core';

/**
 * Generated class for the OfflineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'offline',
  template: `  <ion-content padding class="login">
                <ion-list style="text-align:center">
                <img class="ionImage" [src]="offline">
                <hr>
                
                <h3>WHOOPS!</h3>
                <h5>Slow or no internet connection.</h5>
                <h5>Please check your internet setting.</h5>
                </ion-list>
              
              </ion-content>`

})
export class OfflineComponent {

  offline:string=AppConst.offline

  constructor() {
    
  }

}
