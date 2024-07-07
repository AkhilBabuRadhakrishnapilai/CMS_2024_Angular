import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { HomelabComponent } from './homelab/homelab.component';


@NgModule({
  declarations: [
    SharedComponent,
    HomeComponent,
    HomelabComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    
  ]
})
export class SharedModule { }
