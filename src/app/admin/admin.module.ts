import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
