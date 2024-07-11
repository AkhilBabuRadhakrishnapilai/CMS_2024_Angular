import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';

@NgModule({
  declarations: [
    SharedComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    DoctordashboardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxPaginationModule,
    FormsModule 
  
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
