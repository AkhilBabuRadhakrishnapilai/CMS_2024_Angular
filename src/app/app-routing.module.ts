import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StockComponent } from './stock/stock.component';
import { SharedComponent } from './shared/shared.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path:'stock',component:StockComponent,loadChildren : ()=>import('./stock/stock.module')
    .then(x=>x.StockModule)
  },
  { path:'reports',component:ReportsComponent,loadChildren : ()=>import('./reports/reports.module')
    .then(x=>x.ReportsModule)
  },
 
  {path:'shared',component:SharedComponent,loadChildren : ()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
  },
  {
    path:'admin',component:AdminComponent,
    loadChildren:()=>import('./admin/admin.module')
    .then(x=>x.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
