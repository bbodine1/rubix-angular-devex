import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';

import { DataStoriesRoutingModule } from './data-stories-routing.module';

import { DataStoriesComponent } from './data-stories.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DataStoriesRoutingModule    
  ],
  declarations: [DataStoriesComponent]
})
export class DataStoriesModule { }
