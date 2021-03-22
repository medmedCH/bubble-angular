import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './app-auth.guard';
import {DashboardComponent} from './back/dashboard/dashboard.component';
import {FrontComponent} from './front/front.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',

  },
  {
    path: '**',
    redirectTo: 'dashboard' ,
  },


];


export const ROUTING = RouterModule.forRoot(routes);
