import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-equipments-add',
  templateUrl: './equipments-add.component.html',
  styleUrls: ['./equipments-add.component.scss']
})
export class EquipmentsAddComponent implements OnInit {

  constructor(public stockService:StockService,private router:Router) { }

  ngOnInit(): void {
    this.stockService.getAllSuppiler();
  }
  addEquipment(form: NgForm){
    console.log('adding .....')
    this.stockService.insertEquipment(form.value)
    .subscribe(
      (result => {
        console.log(result);
        //alert ("successful added")
        this.resetForm(form);
        this.router.navigate(['stock/equipmentlist'])
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
    this.addEquipment(form)
  }


}
