import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler()
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.editSuppiler(form)
}
editSuppiler(form: NgForm){
  console.log("Editing.......")
  this.stockService.updateSupplier(form.value)
  .subscribe(
    result => {
      // console.log("hy lebaneese")
      console.log(result);
      this.resetForm(form);
      this.router.navigate(['stock/supplierlist'])
    })
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }
}
}
