import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/services/doctor.service';
@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.scss']
})
export class DiagnosisListComponent implements OnInit{

  term = '';
  p: number = 1;
  constructor(public doctorService:DoctorService, public router:Router){}

  ngOnInit(): void {
    this.doctorService.listDiagnosis();
  }

  onPageChange(page: number) {
    this.p = page;
  }
}
