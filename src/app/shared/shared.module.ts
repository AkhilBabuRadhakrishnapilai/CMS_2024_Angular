import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { CommonHeaderComponent } from './common-header/common-header.component';



@NgModule({
  declarations: [
    SharedComponent,
    HomeComponent,
    CommonHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[CommonHeaderComponent]
})
export class SharedModule { }
