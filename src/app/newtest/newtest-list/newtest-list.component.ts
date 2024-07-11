import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Newtest } from 'src/app/shared/models/newtest';
import {  NewtestService } from 'src/app/shared/services/newtest.service';
@Component({
  selector: 'app-newtest-list',
  templateUrl: './newtest-list.component.html',
  styleUrls: ['./newtest-list.component.scss']
})
export class NewtestListComponent implements OnInit {
  term="";

  constructor(public newtestService:NewtestService,public router:Router) { }
  ngOnInit(): void {
    this.newtestService.viewlabtest();
  }
  updateEmployee(newtest: Newtest) {
    console.log(newtest);
    // Assuming populatenewtestData and router navigation are correct
    this.populatenewtestData(newtest);
    console.log(this.newtestService.formEmployeeData)
    // Navigate to edit page with newtest id
    this.router.navigate(['newtest/editlist', newtest.id]);
  }

  populatenewtestData(test:Newtest){
    this.newtestService.formEmployeeData = Object.assign({},test);
  }
  disableEmployee(id:number){
    if (confirm('Are you sure to delete this record?')){
      this.newtestService.disableEmployee(id)
      .subscribe((response)=>{
        console.log(response);
        this.newtestService.viewlabtest();
      },(error)=>{
        console.log(error);
    })
  }
  }
}
