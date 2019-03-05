import { CustomDatePicker } from './../../models/datepicker';
import { Directive,ElementRef,HostListener, Host, Input } from "@angular/core";
import { ModalController } from "ionic-angular";
import { CalendarResult, CalendarModal, CalendarModalOptions } from "ion2-calendar";
import * as moment from 'moment'


@Directive({
  selector:'[date-picker]',
})



export class DatepickerDirective {
@Input() mode:string
  constructor(public el:ElementRef,public modalCtrl:ModalController,private customDatePicker:CustomDatePicker) {
   
   
  }

  @HostListener('focus')onfocus(){
    this.dispdate(this.mode)
  }
 
  dispdate(pickMode){
    console.log(pickMode)
   
    var defaultScrollTo=moment().toDate()// scroll to current date
    //format D/M/YYYY
    
    
    if(pickMode==='single'){ // date of join/ date of birth
      var dateLimit=moment().toDate()
      var from=moment('1/2/2019','D/M/YYYY').toDate()
      console.log(from)

    }
    else if(pickMode==="muilti"){ // pick multiple dates
      var dateLimit=moment().add(45, 'days').toDate();// Display  45 days from today
      var disableWeeks=[0,6]// disable Sunday-0 and Saturday-6
    }

    else if(pickMode==="range"){
       from=moment('1/2/2019','D/M/YYYY').toDate()

    }

       const options: CalendarModalOptions = {
        pickMode: pickMode,
        showAdjacentMonthDay:false,
        disableWeeks: disableWeeks,
        from:from,
        to: dateLimit,
        defaultScrollTo:defaultScrollTo,
        
        
    }
       
      let myCalendar =  this.modalCtrl.create(CalendarModal, {
       options: options,
       });
          
       myCalendar.present();
        
       myCalendar.onDidDismiss((date: CalendarResult[]) => {
        
         
         if(date!=null){
           console.log(date)
         
       }
      
      })//end of displayCalendar function
    }

}


