import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtestComponent } from './newtest/newtest.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {path:'newtest',component:NewtestComponent,loadChildren :()=>import('./newtest/newtest.module')
    .then(x=>x.NewtestModule)
  },
  { path:'shared',component:SharedComponent,loadChildren : ()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
  }
];
import { AdminComponent } from './admin/admin.component';
import { StockComponent } from './stock/stock.component';

import { ReportsComponent } from './reports/reports.component';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './shared/home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';

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
