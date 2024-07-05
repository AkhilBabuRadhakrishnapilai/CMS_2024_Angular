import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(public receptionistService: ReceptionistService, public router:Router) { }

  ngOnInit(): void {
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
onSubmit(form:NgForm){
  console.log(form.value);
  console.log("imhereee")
  this.addAppointment(form);
}

}
