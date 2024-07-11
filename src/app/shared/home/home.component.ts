import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';
import { Bookappointment } from '../models/bookappointment/bookappointment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

}
