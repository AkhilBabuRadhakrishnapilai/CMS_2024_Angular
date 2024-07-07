import { Department } from './department'; // Import Department if it's defined in another file
import { Qualification } from './qualification'; 
export class User {
    emp_id: string='';
    first_name: string='';
    last_name: string='';
    address: string='';
    dob:Date= new Date;
    department: Department = new Department();
    dept_id : number=0;
    qualification: Qualification=new Qualification();
    date_of_joining: Date=new Date;
    email: string='';
    password: string='';
    role: number=0;
    is_active: boolean=true;
    created_date: Date=new Date;
}
