import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookappointment } from 'src/app/shared/models/bookappointment/bookappointment';
import { Doctor } from 'src/app/shared/models/doctor/doctor';
import { Patientdetails } from 'src/app/shared/models/patientdetails/patientdetails';
import { Specialization } from 'src/app/shared/models/specializations/specialization';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  term = '';
 

  constructor(public receptionistService: ReceptionistService, public router: Router) { }

  ngOnInit(): void {
    this.receptionistService.listAppointments();
  }
 //for update patients
 updateAppoinment(book_appointment:Bookappointment) {
  console.log(book_appointment);
  this.populateAppointmentData(book_appointment);
  this.router.navigate(['receptionist/appointment_edit', book_appointment.id])
}
populateAppointmentData(book_appointment:Bookappointment) {
  // employee String is converted to object
  this.receptionistService.formAppoinmentData= Object.assign({}, book_appointment);

}
}
