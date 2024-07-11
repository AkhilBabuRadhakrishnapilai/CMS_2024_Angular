import { Bookappointment } from "../bookappointment/bookappointment";
import { Medtest } from "../medprescribed/medtest";

export class Pharmacist {
    id:number = 0; 
    opid:Bookappointment=new Bookappointment();
    doctor:Bookappointment=new Bookappointment();
    medicines:Medtest=new Medtest();
    date: Date = new Date();
    total_amount:number = 0;
    is_active:boolean = true;
    quantities:number   = 0;

}
