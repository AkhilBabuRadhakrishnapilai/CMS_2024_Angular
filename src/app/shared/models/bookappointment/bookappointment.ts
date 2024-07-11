import { Patientdetails } from "../patientdetails/patientdetails";

export class Bookappointment {
    id: number=0;
    patient:Patientdetails = new Patientdetails;
    appointment_date:Date = new Date;
    time_slot:string = '';
    token:string = '';
    created_at:Date = new Date;
    updated_at:Date = new Date;
}
