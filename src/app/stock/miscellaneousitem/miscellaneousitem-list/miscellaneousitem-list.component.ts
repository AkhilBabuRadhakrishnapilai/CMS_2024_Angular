import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Miscellaneousitem } from 'src/app/shared/models/miscellaneousitem';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-miscellaneousitem-list',
  templateUrl: './miscellaneousitem-list.component.html',
  styleUrls: ['./miscellaneousitem-list.component.scss']
})
export class MiscellaneousitemListComponent implements OnInit {
  term=''
  constructor(public stockservice:StockService,public router:Router) { }

  ngOnInit(): void {
    this.stockservice.bindListMiscellaneousitem()
  }
  updateMiscellaneousitem(miscellaneousitem:Miscellaneousitem){
    console.log(miscellaneousitem);
    this.populateMiscellaneousitemData(miscellaneousitem);
    this.router.navigate(['stock/miscellaneousitemedit',miscellaneousitem.id])
  }
  populateMiscellaneousitemData(miscellaneousitem:Miscellaneousitem){
    this.stockservice.formMiscellaneousitemData = Object.assign({},miscellaneousitem);
  }
  disableMiscellaneousitem(id:number){
    if (confirm('Are you sure to delete this record?')){
      this.stockservice.disableMiscellaneousitem(id)
      .subscribe((response)=>{
        console.log(response);
        this.stockservice.bindListMiscellaneousitem();
      },(error)=>{
        console.log(error);
    })
  }
  }
}
