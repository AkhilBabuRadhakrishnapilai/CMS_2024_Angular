import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ReceptionistComponent,
    PatientAddComponent,
    PatientEditComponent,
    PatientListComponent,
    AppointmentAddComponent,
    AppointmentListComponent,
    AppointmentEditComponent,
  
  ],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ReceptionistModule { }
