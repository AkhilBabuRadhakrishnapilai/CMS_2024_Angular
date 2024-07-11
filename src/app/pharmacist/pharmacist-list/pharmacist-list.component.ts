import { Component, OnInit } from '@angular/core';
import { PharmacistServiceService } from 'src/app/shared/services/pharmacist-service.service';


@Component({
  selector: 'app-pharmacist-list',
  templateUrl: './pharmacist-list.component.html',
  styleUrls: ['./pharmacist-list.component.scss']
})
export class PharmacistListComponent implements OnInit {

  constructor(public pharmacistService:PharmacistServiceService) { }

  ngOnInit(): void {
    this.pharmacistService.bindListPharmacist();
  }

}
