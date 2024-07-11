import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './shared/home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';

const routes: Routes = [
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
  {
    path:'admin',component:AdminComponent,
    loadChildren:()=>import('./admin/admin.module')
    .then(x=>x.AdminModule)
  },
  {path:'receptionist',component:ReceptionistComponent,
    loadChildren:() =>import('./receptionist/receptionist.module')
    .then(x=>x.ReceptionistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
