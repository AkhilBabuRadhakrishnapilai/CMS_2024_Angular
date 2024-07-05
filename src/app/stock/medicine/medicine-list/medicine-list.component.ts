import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/shared/models/medicine';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {
  term=''

  constructor(public stockservice:StockService,public router:Router) { }

  ngOnInit(): void {
    this.stockservice.bindListMedicine()

  }
  updateMedicine(medicine:Medicine){
    console.log(Medicine);
    this.populateMedicineData(medicine);
    this.router.navigate(['stock/medicineedit',medicine.id])
  }
  populateMedicineData(medicine:Medicine){
    this.stockservice.formMedicineData = Object.assign({},medicine);
  }
  disableMedicine(id:number){
    if (confirm('Are you sure to delete this record?')){
      this.stockservice.disableMedicine(id)
      .subscribe((response)=>{
        console.log(response);
        this.stockservice.bindListMedicine();
      },(error)=>{
        console.log(error);
    })
  }
  }
  isStockAtReorderLevel(medicine:Medicine): boolean {
    return medicine.stock <= medicine.reorder_level;
  }
}
