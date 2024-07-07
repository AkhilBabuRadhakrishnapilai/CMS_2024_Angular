import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelabComponent } from './homelab/homelab.component';

const routes: Routes = [
  {path:'homelab',component:HomelabComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
