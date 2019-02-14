import {CalendarResult } from "ion2-calendar";

export interface leaves{
    leaveType:string;
    date:any[];
    date2?:any[]
    status:string;
    message:string;
    count:number;
    count2?:number;
}
export interface leaveCounter{
    sick:number;
    casual:number;
}


export interface DayMonthYear{
    day: string[];
    month:string[];
    year?:string[];

}

