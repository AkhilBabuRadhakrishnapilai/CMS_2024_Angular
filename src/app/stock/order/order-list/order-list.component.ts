import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { StockService } from 'src/app/shared/services/stock.service';

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  term='';
  selectedOrder: any = null;
  orderStatus: string = '';

  constructor(public stockservice:StockService,public router:Router) { }

  ngOnInit(): void {
    this.stockservice.bindListOrder()
  }
  updateOrder(order:Order){
    console.log(Order);
    this.populateEquipmentData(order);
    this.router.navigate(['stock/orderedit',order.id])
  }
  populateEquipmentData(equipment:Order){
    this.stockservice.formOrderData = Object.assign({},equipment);
  }
  disableOrder(id:number){
    if (confirm('Are you sure to delete this record?')){
      this.stockservice.disableOrder(id)
      .subscribe((response)=>{
        console.log(response);
        this.stockservice.bindListOrder();
      },(error)=>{
        console.log(error);
    })
  }
  }
  showOrderDetails(order: any) {
    this.selectedOrder = order;
    const expectedDeliveryDate = new Date(order.expected_delivery_date);
    const currentDate = new Date();

    if (expectedDeliveryDate <= currentDate) {
      this.orderStatus = 'Received';
    } else {
      this.orderStatus = 'Pending';
    }

    // Use vanilla JavaScript to trigger the modal
    const modalElement = document.getElementById('orderDetailsModal') as HTMLElement;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}

