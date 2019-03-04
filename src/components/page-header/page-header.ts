import { Component, Input } from '@angular/core';


/**
 * Generated class for the PageHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-header',
  template: `  <ion-toolbar color="blue" hideBackButton="true">
                    <button ion-button  menuToggle="left" start>
                        <ion-icon name="menu"></ion-icon>
                    </button>
                    
                    <ion-title text-center>{{this.pageTitle}}</ion-title>

                    <ion-buttons end>
                      <button ion-button >
                        <ion-icon name="notifications"></ion-icon> 
                      </button> 
                    </ion-buttons>
                    
                </ion-toolbar>`
    

               
})
export class PageHeaderComponent {
@Input() pageTitle:string



  constructor() {
  }

  

  

  



}
