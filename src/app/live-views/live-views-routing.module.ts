import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layout/main/main.component';

import { LiveViewsComponent } from './live-views.component';

const routes: Routes = [
  {
    path: 'live-views',
    component: MainLayoutComponent,
    children: [
      { 
        path: '',      
        component: LiveViewsComponent,
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveViewsRoutingModule { }
