import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler();
  }
  addSuppiler(form: NgForm){
    console.log('adding .....')
    this.stockService.insertSupplier(form.value)
    .subscribe(
      (result => {
        console.log(result);
        //alert ("successful added")
        this.resetForm(form);
        this.router.navigate(['stock/supplierlist'])
      })
    )
    //call the service 
  }
  resetForm(form:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.addSuppiler(form)
  }



}
