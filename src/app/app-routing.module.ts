import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtestComponent } from './newtest/newtest.component';
import { SharedComponent } from './shared/shared.component';
import { AdminComponent } from './admin/admin.component';
import { StockComponent } from './stock/stock.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './shared/home/home.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DiagnosisAddComponent } from './doctor/diagnosis-add/diagnosis-add.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';

const routes: Routes = [
  { path:'stock',component:StockComponent,loadChildren : ()=>import('./stock/stock.module')
    .then(x=>x.StockModule)
  },
  { path:'reports',component:ReportsComponent,loadChildren : ()=>import('./reports/reports.module')
    .then(x=>x.ReportsModule)
  },

  {path:'',redirectTo:'shared/home',pathMatch:'full'},
  {
    path:'shared',component:SharedComponent,
    loadChildren:()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
  },
  {
    path:'login',component:AuthComponent,
    loadChildren:()=>import('./auth/auth.module')
    .then(x=>x.AuthModule)
  },

  {path:'', redirectTo:'shared/doctordashboard',pathMatch:'full'},

  {
    path:'admin',component:AdminComponent,
    loadChildren:()=>import('./admin/admin.module')
    .then(x=>x.AdminModule)
  },
  {
    path:'pharmacist',component:PharmacistComponent,
    loadChildren:()=>import('./pharmacist/pharmacist.module')
    .then(x=>x.PharmacistModule)
  },
  },
  {path:'receptionist',component:ReceptionistComponent,
    loadChildren:() =>import('./receptionist/receptionist.module')
    .then(x=>x.ReceptionistModule)
  },
  {path:'newtest',component:NewtestComponent,loadChildren :()=>import('./newtest/newtest.module')
    .then(x=>x.NewtestModule)
  },
  { path:'shared',component:SharedComponent,loadChildren : ()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
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
