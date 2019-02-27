

export interface leaves{
    leaveType:string;
    date:any[];
    date2?:any[];
    status:string;
    message?:string;
    
}

export interface leaveCount{
    sickRemaining:number;
    casualRemaining:number;
    currentMonthLeave:number;
}


export interface DayMonthYear{
    day: string[];
    month:string[];
  

}

