import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SharedComponent } from './shared/shared.component';
import { DiagnosisAddComponent } from './doctor/diagnosis-add/diagnosis-add.component';

const routes: Routes = [

  {path:'', redirectTo:'shared/doctordashboard',pathMatch:'full'},

  {
    path:'admin',component:AdminComponent,
    loadChildren:()=>import('./admin/admin.module')
    .then(x=>x.AdminModule)
  },

  {
    path: 'doctor', component:DoctorComponent,
    loadChildren:() => import('./doctor/doctor.module')
    .then(x=>x.DoctorModule)
  },

  { path: 'doctor/diagnosisadd/:id', component: DiagnosisAddComponent },

  {
    path: 'shared', component:SharedComponent,
    loadChildren:()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
