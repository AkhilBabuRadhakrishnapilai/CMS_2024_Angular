import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PharmacistViewComponent } from './pharmacist-view/pharmacist-view.component';
import { PharmacistListComponent } from './pharmacist-list/pharmacist-list.component';

const routes: Routes = [
  {path:'list',component:PharmacistListComponent}
  
  // {path:'pharmacist-view/:id', component: PharmacistViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }
