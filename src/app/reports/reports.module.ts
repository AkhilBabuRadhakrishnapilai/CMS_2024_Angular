import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ReportsComponent,
    ReportsListComponent,
  
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    Ng2SearchPipeModule,
    SharedModule
    
  ]
})
export class ReportsModule { }
