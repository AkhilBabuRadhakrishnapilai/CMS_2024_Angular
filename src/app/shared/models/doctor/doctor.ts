import { Specialization } from "../specializations/specialization";
import { User } from "../users/user";

export class Doctor {
    doc_id:number = 0;
    user_id:User  = new User;
    specialization:Specialization = new Specialization;
}
