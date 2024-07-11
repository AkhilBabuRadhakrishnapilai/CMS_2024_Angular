import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';
import { Bookappointment } from '../models/bookappointment/bookappointment';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.scss']
})
export class DoctordashboardComponent implements OnInit {

  term = '';
  p: number = 1;
  // searchText;
  constructor(public doctorService:DoctorService, public router:Router){}

  ngOnInit(): void {
    this.doctorService.listAppointment();
  }

  // viewDiagnosis(doctorId: number) {
  //   this.router.navigate(['/doctor/diagnosisadd', doctorId]);
  // }


  getRecord(doctor:Bookappointment){
    console.log(doctor);
    this.populateData(doctor)
    //doctor/diagnosisadd/:id
    this.router.navigate(['doctor/diagnosisadd/',doctor.id]);
  
    }
    populateData(doctor: Bookappointment) {
      this.doctorService.formEmployeeData =
      Object.assign({},doctor);
    }

    onPageChange(page: number) {
      this.p = page;
    }
}
