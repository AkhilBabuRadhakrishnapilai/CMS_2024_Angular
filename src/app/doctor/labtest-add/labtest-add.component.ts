// labtest-add.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookappointment } from 'src/app/shared/models/bookappointment/bookappointment';
import { Labtests } from 'src/app/shared/models/labtests/labtests';
import { Newtest } from 'src/app/shared/models/newtest/newtest';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-labtest-add',
  templateUrl: './labtest-add.component.html',
  styleUrls: ['./labtest-add.component.scss']
})
export class LabtestAddComponent implements OnInit {
  formEmployeeData3: Bookappointment = new Bookappointment();
  availableLabTests: Newtest[] = [];

  constructor(public doctorService: DoctorService, public router: Router) { }

  ngOnInit(): void {
    this.formEmployeeData3 = this.doctorService.getFormEmployeeData();
    if (!this.formEmployeeData3 || !this.formEmployeeData3.patient) {
      this.router.navigate(['doctor/apppointment']);
    }

    // Fetch available lab tests
    this.doctorService.getAvailableLabTests().subscribe(
      data => this.availableLabTests = data,
      error => console.error('Error fetching available lab tests', error)
    );
  }

  addLab(form: NgForm): void {
    if (form.valid && form.dirty) {
      const formData = form.value;
      console.log("im here");
      console.log(form.value);

      const labData = {
        labtests: this.doctorService.formLabData.labtests.id,
        date_of_prescribition: formData.date_of_prescribition,
        lab_tests: formData.lab_tests.map((testId: number) => testId)
      };
  


      console.log('Sending Labtest data:', labData);

      this.doctorService.insertLab(labData).subscribe(
        result => {
          console.log(' Lab test added successfully:', result);
          this.resetForm(form);
          this.router.navigate(['doctor/med-add']);
        },
        error => {
          console.error('Error adding lab test:', error);
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
    this.addLab(form);
  }
}
