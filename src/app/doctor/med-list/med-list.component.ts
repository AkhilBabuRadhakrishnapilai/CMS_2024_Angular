import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-med-list',
  templateUrl: './med-list.component.html',
  styleUrls: ['./med-list.component.scss']
})
export class MedListComponent implements OnInit {

  term = '';
  p: number = 1;
  constructor(public doctorService:DoctorService, public router:Router){}

  ngOnInit(): void {
    this.doctorService.listMedtest();
  }

  onPageChange(page: number) {
    this.p = page;
  }
}
