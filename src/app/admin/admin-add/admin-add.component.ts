import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {

  constructor(public service:AdminService) { }

  ngOnInit(): void {
  }

}
