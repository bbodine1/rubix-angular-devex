import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxGanttModule } from 'devextreme-angular';

import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';

import { DataVisualizationRoutingModule } from './data-visualization-routing.module';

import { DataVisualizationComponent } from './data-visualization.component';

@NgModule({
  imports: [
    CommonModule,
    DxGanttModule,
    MaterialModule,
    SharedModule,
    DataVisualizationRoutingModule
  ],
  declarations: [DataVisualizationComponent]
})
export class DataVisualizationModule { }