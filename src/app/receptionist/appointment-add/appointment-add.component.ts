import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookappointment } from 'src/app/shared/models/bookappointment/bookappointment';
import { Doctor } from 'src/app/shared/models/doctor/doctor';
import { Patientdetails } from 'src/app/shared/models/patientdetails/patientdetails';
import { Specialization } from 'src/app/shared/models/specializations/specialization';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.scss']
})
export class AppointmentAddComponent implements OnInit {
  appointmentForm: FormGroup;
  formAppointmentData: Bookappointment[] = [];
  showBill = false;
  bill: any;

  constructor(public receptionistService: ReceptionistService, public router:Router,private fb: FormBuilder,) {
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
    this.receptionistService.listSpecialization();
    this.receptionistService.listDoctor();

  }
  addAppointment(form:NgForm){
    console.log(form.value)
    this.receptionistService.insertAppointment(form.value).subscribe(
      (result=>{
        console.log(result);
        //alert(success)
        this.resetForm(form);
        this.router.navigate(['receptionist/appointment_list'])
      })
    )
  }
  resetForm(form:NgForm){
    if(form != null){
      form.resetForm()
    }
  }


//adding appoinments
//submitting
onSubmit(): void {
  if (this.appointmentForm.valid) {
    const newAppointment: Bookappointment = this.appointmentForm.value;
    this.receptionistService.insertAppointment(newAppointment).subscribe(response => {
      console.log('Appointment added successfully', response);
      this.formAppointmentData.push(response);  // Add response to formAppointmentData
      // Handle successful response
      this.router.navigate(['receptionist/appointment_list'])
    }, error => {
      console.error('Error adding appointment', error);
      // Handle error response
    });
  } else {
    console.log('Form is invalid');
  }
}
//getting token
generateToken(form:NgForm){
  this.receptionistService.fetchToken().subscribe(
    (response :any) =>{
      form.value.token = response.token;
      this.addAppointment(form);
    },
    error =>{
      console.error('Error generating token:', error);
    }
    
  );
}
checkFormValidity(): void {
  Object.keys(this.appointmentForm.controls).forEach(field => {
    const control = this.appointmentForm.get(field);
    if (control && !control.valid) {
      console.log(`Invalid field: ${field}`);
      console.log(control.errors);
    }
  });
}

// Function to fetch and set patient data based on OPID
fetchPatientByOpid(opid: string): void {
  if (opid) {
    this.receptionistService.getPatientByOpid(opid).subscribe(patient => {
      if (patient) {
        this.appointmentForm.patchValue({
          patient: patient.id
        });
      }
    });
  }
}
//generating bill
generateBill(): void {
  const consultationFee = 50; // Example fee
  const registrationFee = 20; // Example fee

  this.bill = {
    patientId: this.appointmentForm.get('patient')?.value,
    doctor: this.getDoctorNameById(this.appointmentForm.get('doctor')?.value),
    opidValidity: 'Valid for 1 month', // Example validity
    consultationFee,
    registrationFee,
    total: consultationFee + registrationFee
  };

  this.showBill = true;
}

getDoctorNameById(doctorId: string): string {
  const doctor = this.receptionistService.doctor.find(doc => doc.user_id.emp_id === doctorId);
  return doctor ? doctor.user_id.first_name : 'Blemin';
}
}
