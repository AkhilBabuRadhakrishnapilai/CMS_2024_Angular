import { Departments } from "../departments/departments";
import { Gender } from "../genders/gender";
import { Qualification } from "../qualifications/qualification";
import { Role } from "../roles/role";
import { Specialization } from "../specializations/specialization";

export class User {
    emp_id :string='';
    department: Departments=new Departments();
    qualification: Qualification= new Qualification();
    specialization: Specialization = new Specialization();
    gender:Gender = new Gender(); 
    role:Role = new Role();
    first_name: string='';
    last_name: string='';
    address: string='';
    dob:Date = new Date();
    date_of_joining: Date = new Date();
    email: string=''; 
    password: string='';
    is_active:boolean=true;
}
