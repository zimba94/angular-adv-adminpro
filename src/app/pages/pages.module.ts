import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graph1Component } from './graph1/graph1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    Graph1Component,
    PagesComponent
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    Graph1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
