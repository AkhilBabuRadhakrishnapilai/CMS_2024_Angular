import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {
    path:'users',component:AdminComponent,
    loadChildren:()=>import('./admin/admin.module')
    .then(x=>x.AdminModule)
  },
  {path:'shared',component:SharedComponent,
    loadChildren: ()=>import('./shared/shared.module')
    .then(x=>x.SharedModule)
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
