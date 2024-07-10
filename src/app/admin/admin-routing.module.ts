import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

const routes: Routes = [
  {path:'',component:AdminDashComponent},
  {path:'list',component:AdminListComponent},
  {path:'add',component:AdminAddComponent},
  {path:'edit/:id',component:AdminEditComponent},
  {path:'dash',component:AdminDashComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
