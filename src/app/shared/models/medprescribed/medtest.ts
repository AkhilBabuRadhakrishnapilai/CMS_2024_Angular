import { Diagnosis } from "../diagnosis/diagnosis";
import { Medicine } from "../medicine/medicine";

export class Medtest {
    id: number=0;
    med: Diagnosis = new Diagnosis();
    med_list: Medicine[] = [];
    morning: number = 0;
    noon: number = 0;
    night: number = 0;
    frequency: number = 0;
    date_of_prescribition: Date = new Date();
}
