import { CustomDatePicker } from './../../models/datepicker';
import { Directive,ElementRef,HostListener, Host, Input } from "@angular/core";
import { ModalController } from "ionic-angular";
import { CalendarResult, CalendarModal } from "ion2-calendar";
import * as moment from 'moment'

@Directive({
  selector:'[date-picker]',
})



export class DatepickerDirective {
@Input() pickMode:string
  constructor(public el:ElementRef,public modalCtrl:ModalController,private customDatePicker:CustomDatePicker) {
   
   
  }

  @HostListener('focus')onfocus(){
    this.dispdate(this.pickMode)
  }
 
  dispdate(pickMode){
    if(pickMode==='single'){ 

    let dateLimit=new Date().setDate(new Date().getDate()+45)// Display  45 days from today
    var defaultScrollTo=new Date()
     let disableWeek=[0,6]// disable Sunday-0 and Saturday-6
     
       let from=new Date('2/1/2019')
       var options=this.customDatePicker.datePickerOptions(pickMode,defaultScrollTo,from)
       
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


