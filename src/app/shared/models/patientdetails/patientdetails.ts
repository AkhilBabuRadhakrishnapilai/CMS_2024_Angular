import { Gender } from "../genders/gender";

export class Patientdetails {
    id:number = 0;
    opid: number = 0;
    name:string = '';
    dob:Date = new Date();
    age:number= 0;
    blood_group:string = '';
    mobile:string = '';
    emergency_contact:string = '';
    address:string = '';
    email:string = '';
    gender: Gender = new Gender();
}
