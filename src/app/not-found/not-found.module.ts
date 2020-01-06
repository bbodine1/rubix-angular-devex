import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';

import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    NotFoundRoutingModule,
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }