import { Component } from '@angular/core';


/**
 * Generated class for the CompanyPolicyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'company-policy',
  templateUrl: 'company-policy.html'
})
export class CompanyPolicyComponent {
 
  
  companyLogo:string="assets/imgs/companylogo.png"
  constructor() {
    console.log('Hello CompanyPolicyComponent Component');
    
  }
  

}
