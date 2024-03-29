import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
