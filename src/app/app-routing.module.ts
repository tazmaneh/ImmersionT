import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import { ComponentGridComponent } from './component-grid/component-grid.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ComponentDashboardComponent
  },
  {
    path: 'home',
    component: ComponentGridComponent
  },


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
