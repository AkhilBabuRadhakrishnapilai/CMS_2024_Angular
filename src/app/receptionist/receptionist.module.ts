import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';



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
    FormsModule
  ]
})
export class ReceptionistModule { }
