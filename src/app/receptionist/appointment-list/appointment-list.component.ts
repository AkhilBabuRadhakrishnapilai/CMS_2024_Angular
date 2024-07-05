import { Component, OnInit } from '@angular/core';
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
 

  constructor(public receptionistService: ReceptionistService) { }

  ngOnInit(): void {
    this.receptionistService.listAppointments();
  }

}
