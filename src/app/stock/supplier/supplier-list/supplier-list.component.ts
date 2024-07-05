import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/shared/models/supplier';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {
  term=''

  constructor(public stockservice:StockService,public router:Router) { }

  ngOnInit(): void {
    this.stockservice.bindListSupplier()

  }
  updateSupplier(supplier:Supplier){
    console.log(Supplier);
    this.populateEquipmentData(supplier);
    this.router.navigate(['stock/supplieredit',supplier.id])
  }
  populateEquipmentData(supplier:Supplier){
    this.stockservice.formSupplierData = Object.assign({},supplier);
  }
  disableSupplier(id:number){
    if (confirm('Are you sure to delete this record?')){
      this.stockservice.disableSupplier(id)
      .subscribe((response)=>{
        console.log(response);
        this.stockservice.bindListSupplier();
      },(error)=>{
        console.log(error);
    })
  }
  }


}
