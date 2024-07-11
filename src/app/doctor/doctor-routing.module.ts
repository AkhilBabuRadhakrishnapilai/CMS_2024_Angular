import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisListComponent } from './diagnosis-list/diagnosis-list.component';
import { DiagnosisAddComponent } from './diagnosis-add/diagnosis-add.component';
import { LabtestAddComponent } from './labtest-add/labtest-add.component';
import { LabtestListComponent } from './labtest-list/labtest-list.component';
import { MedAddComponent } from './med-add/med-add.component';
import { MedListComponent } from './med-list/med-list.component';

const routes: Routes = [
  {path:'diagnosis-list',component:DiagnosisListComponent},
  {path:'diagnosis-add', component:DiagnosisAddComponent},
  {path:'labtest-add',component:LabtestAddComponent},
  {path:'labtest-list',component:LabtestListComponent},
  {path:'med-add',component:MedAddComponent},
  {path:'med-list',component:MedListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
