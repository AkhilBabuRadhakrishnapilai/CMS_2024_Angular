import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookappointment } from 'src/app/shared/models/bookappointment/bookappointment';
import { Doctor } from 'src/app/shared/models/doctor/doctor';
import { Patientdetails } from 'src/app/shared/models/patientdetails/patientdetails';
import { Specialization } from 'src/app/shared/models/specializations/specialization';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.scss']
})
export class AppointmentEditComponent implements OnInit {
  appointmentForm: FormGroup;
  formAppointmentData: Bookappointment[] = [];

  constructor(public receptionistService: ReceptionistService, public router: Router,private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      opid: ['', Validators.required],
      patient: [new Patientdetails, Validators.required],
      specialization: [new Specialization, Validators.required],
      doctor: [new Doctor, Validators.required],
      appointment_date: ['', Validators.required],
      time_slot: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.receptionistService.listPatients();
    this.receptionistService.listDoctor();
    this.receptionistService.listSpecialization();
    
  }
  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const newAppointment: Bookappointment = this.appointmentForm.value;
      this.receptionistService.updateAppointment(newAppointment).subscribe(response => {
        console.log('Appointment added successfully', response);
        this.formAppointmentData.push(response);  // Add response to formAppointmentData
        // Handle successful response
        this.router.navigate(['receptionist/appointment_list'])
      }, error => {
        console.error('Error adding appointment', error);
        // Handle error response
      });
    } 
    else {
      console.log('Form is invalid');
    }
  }

  editAppointment(form: NgForm) {
    console.log("Editing....")
    this.receptionistService.updateAppointment(form.value).subscribe(result => {
      console.log(result);
      this.resetForm(form);
      this.router.navigate(['receptionist/appointment_list'])
    })
  }
  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm()
    }
  }
}
