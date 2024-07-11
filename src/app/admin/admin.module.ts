import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { FormsModule } from '@angular/forms';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AdminComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminListComponent,
    AdminSidenavComponent,
    AdminDashComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
