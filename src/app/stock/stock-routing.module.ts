import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { MedicineEditComponent } from './medicine/medicine-edit/medicine-edit.component';
import { MedicineAddComponent } from './medicine/medicine-add/medicine-add.component';
import { EquipmentsListComponent } from './equipments/equipments-list/equipments-list.component';
import { EquipmentsEditComponent } from './equipments/equipments-edit/equipments-edit.component';
import { EquipmentsAddComponent } from './equipments/equipments-add/equipments-add.component';
import { MiscellaneousitemListComponent } from './miscellaneousitem/miscellaneousitem-list/miscellaneousitem-list.component';
import { MiscellaneousitemEditComponent } from './miscellaneousitem/miscellaneousitem-edit/miscellaneousitem-edit.component';
import { MiscellaneousitemAddComponent } from './miscellaneousitem/miscellaneousitem-add/miscellaneousitem-add.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierEditComponent } from './supplier/supplier-edit/supplier-edit.component';
import { SupplierAddComponent } from './supplier/supplier-add/supplier-add.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'medicinelist',component:MedicineListComponent},
  {path:'medicineedit/:id',component:MedicineEditComponent},
  {path:'medicineadd',component:MedicineAddComponent},
  {path:'equipmentlist',component:EquipmentsListComponent},
  {path:'equipmentedit/:id',component:EquipmentsEditComponent},
  {path:'equipmentadd',component:EquipmentsAddComponent},
  {path:'miscellaneousitemlist',component:MiscellaneousitemListComponent},
  {path:'miscellaneousitemedit/:id',component:MiscellaneousitemEditComponent},
  {path:'miscellaneousitemadd',component:MiscellaneousitemAddComponent},
  {path:'supplierlist',component:SupplierListComponent},
  {path:'supplieredit/:id',component:SupplierEditComponent},
  {path:'supplieradd',component:SupplierAddComponent},
  {path:'orderlist',component:OrderListComponent},
  {path:'orderedit/:id',component:OrderEditComponent},
  {path:'orderadd',component:OrderAddComponent},
  {path:'stockdashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
