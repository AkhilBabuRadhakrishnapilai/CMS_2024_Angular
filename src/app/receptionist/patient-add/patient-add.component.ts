import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptionistService } from 'src/app/shared/services/receptionist.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  constructor(public receptionistService:ReceptionistService, public router:Router) { }

  ngOnInit(): void {
  }
addPatient(form:NgForm){
  console.log(form.value)
  this.receptionistService.insertPatient(form.value).subscribe(
    (result=>{
      console.log(result);
      //alert(success)
      this.resetForm(form);
      this.router.navigate(['receptionist/patient_list'])
    })
  )
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }
}
//submitting
onSubmit(form:NgForm){
  console.log(form.value);
  console.log("imhereee")
  this.addPatient(form);
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

