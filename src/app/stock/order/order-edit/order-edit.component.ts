import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }
  ngOnInit(): void {
    this.stockService.getAllSuppiler()
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.editOrder(form)
}
editOrder(form: NgForm){
  console.log("Editing.......")
  this.stockService.updateOrder(form.value)
  .subscribe(
    result => {
      // console.log("hy lebaneese")
      console.log(result);
      this.resetForm(form);
      this.router.navigate(['stock/orderlist'])
    })
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }
}

}
