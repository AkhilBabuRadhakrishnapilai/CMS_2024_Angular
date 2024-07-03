import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';


@NgModule({
  declarations: [
    ReceptionistComponent,
    PatientAddComponent,
    PatientEditComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule
  ]
})
export class ReceptionistModule { }
