import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookAppointment } from 'src/app/shared/models/book-appointment';
import { LiveTest } from 'src/app/shared/models/live-test';
import { TestPrescribed } from 'src/app/shared/models/test-prescribed';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.scss']
})
export class PatientlistComponent implements OnInit {

  

  constructor(public patientService: NewtestService, public router: Router) { }
 term=''
  ngOnInit(): void {
    this.patientService.getAllPatients();
    // console.log(this.patients);

    // this.patientService.getAllPatients();
    // console.log(this.patientService.patients);
  }

  updateEmployee(test:TestPrescribed){
    console.log("im here");
    this.disablePatient(test.id)
    console.log(LiveTest);
    this.populateEmployeeData(test);
    this.router.navigate(['newtest/labpayment',test.id])
  }
  populateEmployeeData(test:TestPrescribed){
    this.patientService.testprescribe1 = Object.assign({},test);
  }

  disablePatient(id:number){
    // if (confirm('Are you sure to delete this record?')){
    console.log("iddd");
    console.log(id)
      this.patientService.disablePatient(id)
      .subscribe((response)=>{
        console.log(response);
        this.patientService.viewlabtest1();
      },(error)=>{
        console.log(error);
    })
//   }
  }

  viewPatientDetails(patient: TestPrescribed) {
    console.log('Viewing patient details:', patient);
    // Example navigation to patient details page
    this.router.navigate(['newtest/labpayment', patient.id]);
  }
  
  // getAllPatients(): void {
  //   this.patientService.getAllPats().subscribe({
  //     next: (patients: LiveTest[]) => {
  //       this.patients = patients;
  //       console.log(this.patients);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching patients:', err);
  //       // Handle error as needed
  //     }
  //   });
  // }
}
