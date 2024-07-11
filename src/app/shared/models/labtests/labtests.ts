import { Diagnosis } from "../diagnosis/diagnosis";
import { Newtest } from "../newtest/newtest";

export class Labtests {
    id: number = 0;
    labtests: Diagnosis = new Diagnosis();
    date_of_prescribition: Date = new Date;
    lab_tests: Newtest[] = [];
}

