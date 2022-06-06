import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


const routes:Routes =[
  {path: '**', component: NopagefoundComponent}
];

 @NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes, { useHash: true}),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
