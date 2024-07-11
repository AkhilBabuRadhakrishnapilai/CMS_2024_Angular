import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labtests } from 'src/app/shared/models/labtests/labtests';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-labtest-list',
  templateUrl: './labtest-list.component.html',
  styleUrls: ['./labtest-list.component.scss']
})
export class LabtestListComponent implements OnInit {

  term = '';
  p: number = 1;
  
  constructor(public doctorService:DoctorService, public router:Router){
  }

  ngOnInit(): void {
    //this.doctorService.listLabtest();
    this.doctorService.listLabtest2();
  }

  onPageChange(page: number) {
    this.p = page;
  }

}
