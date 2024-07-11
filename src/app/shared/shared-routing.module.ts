  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';
import { HomeComponent } from './home/home.component';
import { HomelabComponent } from './homelab/homelab.component';

const routes: Routes = [
  {path:'homelab',component:HomelabComponent},

  {path:'home',component:HomeComponent},
  {path:'receptionist_dashboard',component:ReceptionistDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
