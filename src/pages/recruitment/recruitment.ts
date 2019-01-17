import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides} from 'ionic-angular';

/**
 * Generated class for the RecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruitment',                          
  templateUrl: 'recruitment.html',
})
export class RecruitmentPage {
 
  recruitment:string;
 
  constructor() {
    this.recruitment="newApplicant";
   
  }

  
  
}
