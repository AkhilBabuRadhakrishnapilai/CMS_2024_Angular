import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionistComponent } from './receptionist/receptionist.component';

const routes: Routes = [
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
