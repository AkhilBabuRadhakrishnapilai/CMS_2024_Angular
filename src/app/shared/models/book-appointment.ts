import { Doctors } from "./doctors";
import { Patientdetails } from "./patientdetails";

export class BookAppointment {
    id: number=0;
    patient: Patientdetails=new Patientdetails();
    department: string=''; // Consider changing to Department if needed
    doctor: Doctors=new Doctors();
    appointment_date: Date=new Date;
    time_slot: string='';
    token: string='';
    created_at: Date=new Date;
    updated_at: Date=new Date;
    is_active: boolean=true;
}
