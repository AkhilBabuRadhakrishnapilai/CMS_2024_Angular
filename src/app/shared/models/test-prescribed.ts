import { Diagnosis } from "./diagnosis";
import { Newtest } from "./newtest";


export class TestPrescribed {
  id:number=0;
  labtests:Diagnosis=new Diagnosis();
  date_of_prescribition:Date=new Date;
  lab_tests_details:Newtest[]=[];
  is_active:boolean = false; 
  
}