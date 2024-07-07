import { Doctor } from "../doctors/doctor";
import { Gender } from "../genders/gender";
import { Qualification } from "../qualifications/qualification";
import { Role } from "../roles/role";
import { Specialization } from "../specializations/specialization";

export class User {
    emp_id :string='';
    qualification: Qualification= new Qualification();
    qualification_id:number=0;
    specialization: Specialization = new Specialization();
    specialization_id:number=0;
    fees:number=0;
    doctor:Doctor = new Doctor();
    gender:Gender = new Gender();
    gender_id:number=0; 
    role:Role = new Role();
    role_id:number=0;
    first_name: string='';
    last_name: string='';
    contact_number:string='';
    address: string='';
    dob:Date = new Date();
    date_of_joining: Date = new Date();
    email: string=''; 
    password: string='';
    is_active:boolean=true;
    
}
