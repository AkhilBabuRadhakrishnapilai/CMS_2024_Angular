import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist-dashboard',
  templateUrl: './receptionist-dashboard.component.html',
  styleUrls: ['./receptionist-dashboard.component.scss']
})
export class ReceptionistDashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
}
