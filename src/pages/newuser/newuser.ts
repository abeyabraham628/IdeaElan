import { DatePicker } from '@ionic-native/date-picker';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides} from 'ionic-angular';

/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})

export class NewuserPage {
  
  @ViewChild('slider') slider:Slides;
 users:String
 doj:String
 dob:String
    constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker:DatePicker) {
      this.users="newUser";
    }

  
  selectedTab(index:number){
    this.slider.slideTo(index);
  }
  
  dispdate(type:String){
      this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT

    }).then(
     date=>{
      if(type==="join"){
        this.doj = new Date(date).toLocaleDateString()
      }
      else{
        this.dob = new Date(date).toLocaleDateString()
      }
    }
    );
  }


}
