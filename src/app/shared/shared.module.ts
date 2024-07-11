import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SharedComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ]
})
export class SharedModule { }
