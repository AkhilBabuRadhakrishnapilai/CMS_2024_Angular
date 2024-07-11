import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.scss']
})
export class MedicineAddComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler();
  }
  addMedicine(form: NgForm){
    console.log('adding .....')
    this.stockService.insertMedicine(form.value)
    .subscribe(
      (result => {
        console.log(result);
        //alert ("successful added")
        this.resetForm(form);
        this.router.navigate(['stock/medicinelist'])
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
    this.addMedicine(form)
  }

}
