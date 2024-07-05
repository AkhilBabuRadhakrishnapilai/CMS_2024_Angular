import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  constructor(public receptionistService: ReceptionistService, public router: Router) { }

  ngOnInit(): void {
    //this.receptionistService.listPatients();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.editPatient(form);
  }

  editPatient(form: NgForm) {
    console.log("Editing....")
    this.receptionistService.updatePatient(form.value).subscribe(result => {
      console.log(result);
      this.resetForm(form);
      this.router.navigate(['receptionist/patient_list'])
    })
  }
  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm()
    }
  }
  calculateAge() {
    const dob = new Date(this.receptionistService.formPatientData.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    this.receptionistService.formPatientData.age = age;
  }
}
