import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { EquipmentsAddComponent } from './equipments/equipments-add/equipments-add.component';
import { EquipmentsEditComponent } from './equipments/equipments-edit/equipments-edit.component';
import { EquipmentsListComponent } from './equipments/equipments-list/equipments-list.component';
import { MedicineAddComponent } from './medicine/medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine/medicine-edit/medicine-edit.component';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { MiscellaneousitemEditComponent } from './miscellaneousitem/miscellaneousitem-edit/miscellaneousitem-edit.component';
import { MiscellaneousitemAddComponent } from './miscellaneousitem/miscellaneousitem-add/miscellaneousitem-add.component';
import { MiscellaneousitemListComponent } from './miscellaneousitem/miscellaneousitem-list/miscellaneousitem-list.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { SupplierAddComponent } from './supplier/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './supplier/supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    StockComponent,
    EquipmentsAddComponent,
    EquipmentsEditComponent,
    EquipmentsListComponent,
    MedicineAddComponent,
    MedicineEditComponent,
    MedicineListComponent,
    MiscellaneousitemEditComponent,
    MiscellaneousitemAddComponent,
    MiscellaneousitemListComponent,
    OrderAddComponent,
    OrderEditComponent,
    OrderListComponent,
    SupplierAddComponent,
    SupplierEditComponent,
    SupplierListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class StockModule { }
