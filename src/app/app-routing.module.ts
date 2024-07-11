import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './shared/home/home.component';
import { SharedComponent } from './shared/shared.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';

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
  {
    path:'pharmacist',component:PharmacistComponent,
    loadChildren:()=>import('./pharmacist/pharmacist.module')
    .then(x=>x.PharmacistModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
