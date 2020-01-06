import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layout/main/main.component';

import { DataVisualizationComponent } from './data-visualization.component';

const routes: Routes = [
  {
    path: 'data-visualization',
    component: MainLayoutComponent,
    children: [
      { 
        path: '',      
        component: DataVisualizationComponent,
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataVisualizationRoutingModule { }
