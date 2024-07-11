import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { HomelabComponent } from './homelab/homelab.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';

@NgModule({
  declarations: [
    SharedComponent,
    HomeComponent,
    HomelabComponent,
    ReceptionistDashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CommonHeaderComponent,
    NavbarComponent,
    DoctordashboardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxPaginationModule,
    FormsModule,
  
  ],
  exports:[NavbarComponent,SidebarComponent,FooterComponent,CommonHeaderComponent]
})
export class SharedModule { }
