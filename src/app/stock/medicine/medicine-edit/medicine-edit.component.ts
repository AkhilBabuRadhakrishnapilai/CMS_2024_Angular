import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.scss']
})
export class MedicineEditComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler()
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.editMedicine(form)
}
editMedicine(form: NgForm){
  console.log("Editing.......")
  this.stockService.updateMedicine(form.value)
  .subscribe(
    result => {
      // console.log("hy lebaneese")
      console.log(result);
      this.resetForm(form);
      this.router.navigate(['stock/medicinelist'])
    })
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }
}
}
