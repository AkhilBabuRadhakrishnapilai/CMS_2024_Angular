import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-newtest-add',
  templateUrl: './newtest-add.component.html',
  styleUrls: ['./newtest-add.component.scss']
})
export class NewtestAddComponent implements OnInit {

  constructor(public newtestservice:NewtestService,private router:Router) { }

  ngOnInit(): void {
  }
addtest(form: NgForm){
  console.log('adding .....')
  this.newtestservice.inserttest(form.value)
    .subscribe(
      (result => {
        console.log(result);
        //alert ("successful added")
        this.resetForm(form);
        this.router.navigate(['newtest/lablist'])
      })
    )
    //call the service 
  }
  resetForm(form:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }
  
  onSubmit(form: NgForm){
    console.log(form.value);
    this.addtest(form)
  }
  }
  

