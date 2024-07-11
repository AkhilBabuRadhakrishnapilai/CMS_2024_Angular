import { Specification } from "./specification";
import { User } from "./users/user";


export class Doctors {
    doc_id: number=0;
    user_id: User=new User();// Assuming User is imported and defined properly in user.model.ts
    specialization: Specification=new Specification; 
}
