import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-miscellaneousitem-edit',
  templateUrl: './miscellaneousitem-edit.component.html',
  styleUrls: ['./miscellaneousitem-edit.component.scss']
})
export class MiscellaneousitemEditComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler()
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.editMiscellaneousitem(form)
}
editMiscellaneousitem(form: NgForm){
  console.log("Editing.......")
  this.stockService.updateMiscellaneousitem(form.value)
  .subscribe(
    result => {
     
      console.log(result);
      this.resetForm(form);
      this.router.navigate(['stock/miscellaneousitemlist'])
    })
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }
}
}
