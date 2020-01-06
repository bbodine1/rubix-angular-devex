import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '../layout/main/main.component';

import { DataStoriesComponent } from './data-stories.component';

const routes: Routes = [
  {
    path: 'data-stories',
    component: MainLayoutComponent,
    children: [
      { 
        path: '',      
        component: DataStoriesComponent,
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataStoriesRoutingModule { }
