import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';


const routes: Routes = [
  {path:'patient_list',component:PatientListComponent},
  {path:'patient_add',component:PatientAddComponent},
  {path:'patient_edit/:id',component:PatientEditComponent},
  {path:'appointment_list',component:AppointmentListComponent},
  {path:'appointment_add',component:AppointmentAddComponent},
  {path:'appointment_edit/:id',component:AppointmentEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
