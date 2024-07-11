
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LiveTest } from 'src/app/shared/models/live-test';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-livetests',
  templateUrl: './livetests.component.html',
  styleUrls: ['./livetests.component.scss']
})
export class LivetestsComponent implements OnInit {
    term='';

  constructor(public livetestservice:NewtestService,public router:Router) { }

  ngOnInit(): void {

  }
  addEmployee(form: NgForm){
    console.log('adding .....')
    this.livetestservice.insertvalue(form.value)
    .subscribe(
      (result => {
        console.log(result);
        //alert ("successful added")
        this.resetForm(form);
        this.router.navigate(['newtest/dotest'])
      })
    )
    //call the service 
  }
  onSubmit(form: NgForm, patients: any) {
    if (form.valid) {
      const formData = form.value;
      console.log(formData)
      const inputJson = {
        prescribed_test: patients.id, // Ensure patient.test or the correct property is assigned here
        tested_value: formData.tested_value
      };

      this.editEmployee(inputJson);
    }
  }

  editEmployee(inputJson: any) {
    console.log("Editing.......");
    console.log("Input JSON:", inputJson); // Log the input data being sent
    
    this.livetestservice.updatevalue(inputJson)
      .subscribe(
        result => {
          console.log("Response:", result); // Log the response from the backend
          // Optionally, handle success (e.g., show a success message)
        },
        error => {
          console.error('Error updating tested value:', error);
          // Optionally, handle error (e.g., show an error message)
        }
      );
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

