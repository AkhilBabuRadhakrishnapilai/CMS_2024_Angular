import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';

const routes: Routes = [
  {path:'receptionist_dashboard',component:ReceptionistDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
