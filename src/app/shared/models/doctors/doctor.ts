import { User } from "../users/user";

export class Doctor {
    doc_id:number=0;
    fees:number=0;
    user_id: User=new User()
    specialization:string='';
}
