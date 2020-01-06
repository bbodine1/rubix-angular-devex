import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';

import { PartsManagementRoutingModule } from './parts-management-routing.module';

import { PartsManagementComponent } from './parts-management.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    PartsManagementRoutingModule
  ],
  declarations: [PartsManagementComponent]
})
export class PartsManagementModule { }