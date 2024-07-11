import { Bookappointment } from "../bookappointment/bookappointment";

export class Diagnosis {
    id: number=0;
    appointment: Bookappointment = new Bookappointment;
    medical_history: string='';
    symptoms: string='';
    diagnosis: string='';
    doctor_note: string='';
    next_visit: Date= new Date();
}
