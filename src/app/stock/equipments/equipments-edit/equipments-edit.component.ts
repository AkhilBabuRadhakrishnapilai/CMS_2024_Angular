import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-equipments-edit',
  templateUrl: './equipments-edit.component.html',
  styleUrls: ['./equipments-edit.component.scss']
})
export class EquipmentsEditComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler()
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.editEquipment(form)
}
editEquipment(form: NgForm){
  console.log("Editing.......")
  this.stockService.updateEquipment(form.value)
  .subscribe(
    result => {
      // console.log("hy lebaneese")
      console.log(result);
      this.resetForm(form);
      this.router.navigate(['stock/equipmentlist'])
    })
}
resetForm(form:NgForm){
  if(form != null){
    form.resetForm()
  }
}
}
