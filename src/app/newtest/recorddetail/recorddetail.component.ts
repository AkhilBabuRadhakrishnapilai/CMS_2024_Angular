import { Component, OnInit } from '@angular/core';
import { NewtestService } from 'src/app/shared/services/newtest.service';

@Component({
  selector: 'app-recorddetail',
  templateUrl: './recorddetail.component.html',
  styleUrls: ['./recorddetail.component.scss']
})
export class RecorddetailComponent implements OnInit {

  constructor(public recorddet:NewtestService) { }

  ngOnInit(): void {
  }

}
