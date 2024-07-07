import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveTest } from 'src/app/shared/models/live-test';
import { TestPrescribed } from 'src/app/shared/models/test-prescribed';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-dotest',
  templateUrl: './dotest.component.html',
  styleUrls: ['./dotest.component.scss']
})
export class DotestComponent implements OnInit {

  

  constructor(public patientService: NewtestService, public router: Router) { }
 term='';
  ngOnInit(): void {
    console.log("im heree");
    this.patientService.getAll();
  }


  dotest(test:TestPrescribed){
    console.log("im here");
    console.log(LiveTest);
    this.populateEmployeeData(test);
    this.router.navigate(['newtest/livetests',test.id])
  }
  populateEmployeeData(test:TestPrescribed){
    this.patientService.testprescribe1 = Object.assign({},test);
  }
  
}
