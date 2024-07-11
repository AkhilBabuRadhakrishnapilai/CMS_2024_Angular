import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { NgForm } from '@angular/forms';
import { Diagnosis } from 'src/app/shared/models/diagnosis/diagnosis';
import { Bookappointment } from 'src/app/shared/models/bookappointment/bookappointment';

@Component({
  selector: 'app-diagnosis-add',
  templateUrl: './diagnosis-add.component.html',
  styleUrls: ['./diagnosis-add.component.scss']
})
export class DiagnosisAddComponent implements OnInit {
  
  formEmployeeData2: Bookappointment = new Bookappointment();

  constructor(public doctorService: DoctorService, public router: Router) { }

  ngOnInit(): void {
    this.formEmployeeData2 = this.doctorService.getFormEmployeeData();
    if (!this.formEmployeeData2 || !this.formEmployeeData2.patient) {
      this.router.navigate(['doctor/appointment']);
    }
  }

  addDiagnosis(form: NgForm): void {
    if (form.valid && form.dirty) {
      const formData = form.value;
  
      const diagnosisData: Diagnosis = {
        id: 0, // Default value, adjust as needed
        appointment: formData.id, // Make sure appointment is just an ID
        medical_history: formData.medical_history,
        symptoms: formData.symptoms,
        diagnosis: formData.diagnosis,
        doctor_note: formData.doctor_note,
        next_visit: formData.next_visit
      };
  
      console.log('Sending diagnosis data:', diagnosisData); // Log the data being sent

      this.doctorService.insertDiagnosis(diagnosisData).subscribe(
        result => {
          console.log('Diagnosis added successfully:', result);
          this.resetForm(form);
          this.router.navigate(['doctor/labtest-add']);
        },
        error => {
          console.error('Error adding diagnosis:', error);
        }
      );
    }
  }

  resetForm(form: NgForm): void {
    if (form != null) {
      form.resetForm();
    }
  }

  onSubmit(form: NgForm): void {
    this.addDiagnosis(form);
  }
}
