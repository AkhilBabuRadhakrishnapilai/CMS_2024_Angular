import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtestListComponent } from './newtest-list/newtest-list.component';
import { NewtestAddComponent } from './newtest-add/newtest-add.component';
import { NewtestEditComponent } from './newtest-edit/newtest-edit.component';

import { PatientlistComponent } from './patientlist/patientlist.component';
import { LabpaymentComponent } from './labpayment/labpayment.component';
// import { combineLatest } from 'rxjs';
import { DotestComponent } from './dotest/dotest.component';
import { LivetestsComponent } from './livetests/livetests.component';
import { RecordComponent } from './record/record.component';
import { RecorddetailComponent } from './recorddetail/recorddetail.component';

const routes: Routes = [
  {path:'lablist',component:NewtestListComponent},
  {path:'addlist',component:NewtestAddComponent},
  {path:'editlist/:id',component:NewtestEditComponent},
  {path:'patientdetail',component:PatientlistComponent},
  {path:'labpayment/:id',component:LabpaymentComponent},
  {path:'dotest',component:DotestComponent},
  {path:'livetests/:id',component:LivetestsComponent},
  {path:'record',component:RecordComponent},
  {path:'recorddetail/:id',component:RecorddetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewtestRoutingModule { }
