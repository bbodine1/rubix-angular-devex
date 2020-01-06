import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';
import { DevExtremeModule } from '../devextreme-module';
import { SharedModule } from '../shared/shared.module';

import { LiveViewsRoutingModule } from './live-views-routing.module';

import { LiveViewsComponent } from './live-views.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DevExtremeModule,
    SharedModule,
    LiveViewsRoutingModule
  ],
  declarations: [LiveViewsComponent]
})
export class LiveViewsModule { }