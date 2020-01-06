import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { DevExtremeModule } from './devextreme-module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { DataStoriesModule } from './data-stories/data-stories.module';
import { DataVisualizationModule } from './data-visualization/data-visualization.module';
import { LiveViewsModule } from './live-views/live-views.module';
import { PartsManagementModule } from './parts-management/parts-management.module';
import { NotFoundModule } from './not-found/not-found.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DevExtremeModule,
    SharedModule,
    LayoutModule,
    DashboardModule,
    LoginModule,
    DataStoriesModule,
    DataVisualizationModule,
    LiveViewsModule,
    PartsManagementModule,
    NotFoundModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }