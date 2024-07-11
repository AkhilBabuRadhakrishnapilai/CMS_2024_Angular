import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveTest } from 'src/app/shared/models/live-test';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  constructor(public recordservice:NewtestService,public router:Router) { }
 term='';
  ngOnInit(): void {
    this.recordservice.getrecord();
  }

  viewDetails(employee:LiveTest){
    this.populateEmployeeData(employee);
    this.router.navigate(['newtest/recorddetail',employee.id])
  }
  populateEmployeeData(employee:LiveTest){
    this.recordservice.formEmployeeData1 = Object.assign({},employee);
  }
 

}
