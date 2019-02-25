
import {CalendarComponentOptions } from "ion2-calendar";

import { Component, Injectable } from '@angular/core'; 
import { ModalController, ViewController } from 'ionic-angular';
import { resolve } from "path";


@Injectable()
export class CustomDatePicker{
    
constructor(public modalCtrl:ModalController){}
tony:any

 datePickerOptions(dateLimitTo?,disableWeeks?)  {
 
    const options: CalendarComponentOptions = {
        pickMode: 'multi',
        showAdjacentMonthDay:false,
        disableWeeks: disableWeeks,
        from:new Date(),
        to: dateLimitTo
    }
    return options
        
    
    
}



  getMonths(){
    return [{'monthName':'January','value':'01'},
            {'monthName':'February','value':'02'},  
            {'monthName':'March','value':'03'},
            {'monthName':'April','value':'04'},  
            {'monthName':'May','value':'05'},  
            {'monthName':'June','value':'06'},  
            {'monthName':'July','value':'07'}, 
            {'monthName':'August','value':'08'},  
            {'monthName':'September','value':'09'},  
            {'monthName':'October','value':'10'},  
            {'monthName':'November','value':'11'},  
            {'monthName':'December','value':'12'}]

    }     
}