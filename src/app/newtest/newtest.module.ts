import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewtestRoutingModule } from './newtest-routing.module';
import { NewtestComponent } from './newtest.component';
import { NewtestAddComponent } from './newtest-add/newtest-add.component';
import { NewtestEditComponent } from './newtest-edit/newtest-edit.component';
import { NewtestListComponent } from './newtest-list/newtest-list.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { RecordComponent } from './record/record.component';
import { RecorddetailComponent } from './recorddetail/recorddetail.component';
import { LabpaymentComponent } from './labpayment/labpayment.component';
import { DotestComponent } from './dotest/dotest.component';
import { LivetestsComponent } from './livetests/livetests.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewtestComponent,
    NewtestAddComponent,
    NewtestEditComponent,
    NewtestListComponent,
    PatientlistComponent,
    RecordComponent,
    RecorddetailComponent,
    LabpaymentComponent,
    DotestComponent,
    LivetestsComponent
  ],
  imports: [
    CommonModule,
    NewtestRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class NewtestModule { }
