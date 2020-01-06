import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundLayoutComponent } from '../layout/not-found/not-found.component';

import { NotFoundComponent } from './not-found.component';
 
const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundLayoutComponent,
    children: [
      { 
        path: '',  
        component: NotFoundComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }  
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {
}