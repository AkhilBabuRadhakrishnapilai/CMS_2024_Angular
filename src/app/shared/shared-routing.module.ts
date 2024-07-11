import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';

const routes: Routes = [
  {path:'doctordashboard', component:DoctordashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
