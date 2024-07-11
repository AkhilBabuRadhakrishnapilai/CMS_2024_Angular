import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipments } from 'src/app/shared/models/equipments';
import { StockService } from 'src/app/shared/services/stock.service';

@Component({
  selector: 'app-equipments-list',
  templateUrl: './equipments-list.component.html',
  styleUrls: ['./equipments-list.component.scss']
})
export class EquipmentsListComponent implements OnInit {
  term=''

  constructor(public stockservice:StockService,public router:Router) { }

  ngOnInit(): void {
    this.stockservice.bindListEquipment()
  }
  updateEquipment(equipment:Equipments){
    console.log(Equipments);
    this.populateEquipmentData(equipment);
    this.router.navigate(['stock/equipmentedit',equipment.id])
  }
  populateEquipmentData(equipment:Equipments){
    this.stockservice.formEquipmentData = Object.assign({},equipment);
  }
  disableEquipment(id:number){
    if (confirm('Are you sure to delete this record?')){
      this.stockservice.disableEquipment(id)
      .subscribe((response)=>{
        console.log(response);
        this.stockservice.bindListEquipment();
      },(error)=>{
        console.log(error);
    })
  }
  }

}
