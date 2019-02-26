import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';


@Injectable()
export class Employee{

constructor(private afauth:AngularFireAuth,private firebase:AngularFireDatabase){

}

async getEmployee(){
    let employeeDetails=[]
    await this.firebase.database.ref(`users`).once('value',(snap)=>{
        snap.forEach((child)=>{
            employeeDetails.push({
                $key:child.key,
                ...child.val()
            })
        })
    })
    return employeeDetails
}



}

