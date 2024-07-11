import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-newtest-edit',
  templateUrl: './newtest-edit.component.html',
  styleUrls: ['./newtest-edit.component.scss']
})
export class NewtestEditComponent implements OnInit {

  constructor(public newtestservice:NewtestService,private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.editEmployee(form)
  }
  editEmployee(form: NgForm){
    console.log("Editing.......")
    this.newtestservice.updateEmployee(form.value)
    .subscribe(
      result => {
        console.log(result);
        this.resetForm(form);
        this.router.navigate(['newtest/lablist'])
      })
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }
}
}

