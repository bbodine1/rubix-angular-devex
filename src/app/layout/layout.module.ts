import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material-module';
import { SharedModule } from '../shared/shared.module';

import { MainLayoutComponent } from './main/main.component';
import { AccountLayoutComponent } from './account/account.component';
import { NotFoundLayoutComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule  
  ],
  exports: [
    MainLayoutComponent,
    AccountLayoutComponent,
    NotFoundLayoutComponent
  ],
  declarations: [
    MainLayoutComponent,
    AccountLayoutComponent,
    NotFoundLayoutComponent
  ]
})
export class LayoutModule { }