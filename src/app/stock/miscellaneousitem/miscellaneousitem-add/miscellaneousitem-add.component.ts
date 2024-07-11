import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-miscellaneousitem-add',
  templateUrl: './miscellaneousitem-add.component.html',
  styleUrls: ['./miscellaneousitem-add.component.scss']
})
export class MiscellaneousitemAddComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler();
  }
  addMiscellaneousitem(form: NgForm){
    console.log('adding .....')
    this.stockService.insertMiscellaneousitem(form.value)
    .subscribe(
      (result => {
        console.log(result);
        //alert ("successful added")
        this.resetForm(form);
        this.router.navigate(['stock/miscellaneousitemlist'])
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
    this.addMiscellaneousitem(form)
  }
}
