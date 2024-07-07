import { BookAppointment } from "./book-appointment";

export class Diagnosis {
    id: number=0;
    appointment: BookAppointment=new BookAppointment();
    medical_history: string='';
    symptoms: string='';
    diagnosis: string='';
    doctor_note: string='';
    next_visit: Date=new Date;
    is_active: boolean=true;
}
