import { Doctor } from "../doctor/doctor";
import { Patientdetails } from "../patientdetails/patientdetails";
import { Specialization } from "../specializations/specialization";

export class Bookappointment {
   id:number = 0;
   patient:Patientdetails = new Patientdetails;
   specialization:Specialization = new Specialization;
   doctor:Doctor = new Doctor;
   appointment_date:Date = new Date;
   time_slot:string = '';
   token:string = '';
   created_at:Date = new Date;
   updated_at:Date = new Date;
}
