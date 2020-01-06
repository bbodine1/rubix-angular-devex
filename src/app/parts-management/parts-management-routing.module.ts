import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layout/main/main.component';

import { PartsManagementComponent } from './parts-management.component';

const routes: Routes = [
  {
    path: 'parts-management',
    component: MainLayoutComponent,
    children: [
      { 
        path: '',      
        component: PartsManagementComponent,
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsManagementRoutingModule { }
