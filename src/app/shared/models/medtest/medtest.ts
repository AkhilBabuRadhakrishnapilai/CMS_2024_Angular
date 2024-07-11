import { Diagnosis } from "../diagnosis/diagnosis";
import { Newmed } from "../newmed/newmed";

export class Medtest {
    id: number=0;
    med: Diagnosis = new Diagnosis();
    med_list: Newmed[] = [];
    morning: number = 0;
    noon: number = 0;
    night: number = 0;
    frequency: number = 0;
    date_of_prescribition: Date = new Date();
}
