import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacistRoutingModule } from './pharmacist-routing.module';
import { PharmacistComponent } from './pharmacist.component';

import { PharmacistViewComponent } from './pharmacist-view/pharmacist-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PharmacistListComponent } from './pharmacist-list/pharmacist-list.component';


@NgModule({
  declarations: [
    PharmacistComponent,
    PharmacistListComponent
    // PharmacistViewComponent
  ],
  imports: [
    CommonModule,
    PharmacistRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PharmacistModule { }
