import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }];

export const APP_ROUTING = RouterModule.forRoot(routes);
