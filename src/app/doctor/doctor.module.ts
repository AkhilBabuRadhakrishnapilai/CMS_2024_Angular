import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { DiagnosisAddComponent } from './diagnosis-add/diagnosis-add.component';
import { DiagnosisListComponent } from './diagnosis-list/diagnosis-list.component';
import { LabtestAddComponent } from './labtest-add/labtest-add.component';
import { LabtestListComponent } from './labtest-list/labtest-list.component';
import { MedAddComponent } from './med-add/med-add.component';
import { MedListComponent } from './med-list/med-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    DoctorComponent,
    DiagnosisAddComponent,
    DiagnosisListComponent,
    LabtestAddComponent,
    LabtestListComponent,
    MedAddComponent,
    MedListComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  
})
export class DoctorModule { }
