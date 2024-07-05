import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patientdetails } from 'src/app/shared/models/patientdetails/patientdetails';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  term = '';

  constructor(public receptionistService: ReceptionistService, public router: Router) { }

  ngOnInit(): void {
    this.receptionistService.listPatients();
  }

  //for update patients
  updatePatient(patient_details: Patientdetails) {
    console.log(patient_details);
    this.populatePatientData(patient_details);
    this.router.navigate(['receptionist/patient_edit', patient_details.id])
  }
  populatePatientData(patient_details: Patientdetails) {
    // employee String is converted to object
    this.receptionistService.formPatientData = Object.assign({}, patient_details);

  }
  //disable patient
  disablePatient(id: number) {
    if (confirm('Are you sure you want to disable?')) {
      this.receptionistService.disablePatient(id).subscribe((response) => {
        console.log(response);
        this.receptionistService.listPatients();
      }, (error) => {
        console.log(error);
      })
    }
  }

}
