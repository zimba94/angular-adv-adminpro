import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { Graph1Component } from './graph1/graph1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    Graph1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    Graph1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
