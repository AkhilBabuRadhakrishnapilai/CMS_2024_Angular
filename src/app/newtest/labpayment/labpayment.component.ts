

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LiveTest } from 'src/app/shared/models/live-test';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-labpayment',
  templateUrl:'./labpayment.component.html',
  styleUrls: ['./labpayment.component.scss']
})
export class LabpaymentComponent  {

  constructor(public labPaymentService: NewtestService,public router:Router) {}

  ngOnInit(): void {
  
  }
  
  onSubmit(form: NgForm){
    console.log(form.value);
    this.editEmployee(form)
  }
  editEmployee(form: NgForm){
    console.log("Editing.......")
    this.labPaymentService.updateEmployee(form.value)
    .subscribe(
      result => {
        console.log(result);
        this.resetForm(form);
        this.router.navigate(['newtest/patientdetail'])
      })
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }

}
printPage() {
  window.print();
}

}
// labpayment.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { LabPaymentService } from '../services/lab-payment.service'; // Adjust path as per your service location
// import { LiveTest } from '../models/LiveTest'; // Adjust path as per your model location

// @Component({
//   selector: 'app-labpayment',
//   templateUrl: './labpayment.component.html',
//   styleUrls: ['./labpayment.component.css']
// })
// export class LabPaymentComponent implements OnInit {
//   labPayment: LiveTest[]=[]; // Assuming LiveTest is the model for lab payment details

//   constructor(
//     private route: ActivatedRoute,
//     private labPaymentService: LabPaymentService
//   ) { }

//   ngOnInit(): void {
//     this.loadLabPaymentDetails();
//   }

//   loadLabPaymentDetails(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.labPaymentService.getLabPaymentById(id).subscribe(
//       labPayment => {
//         this.labPayment = labPayment;
//       },
//       error => {
//         console.error('Error loading lab payment details:', error);
//         // Handle error as per your application's requirement
//       }
//     );
//   }

// }

