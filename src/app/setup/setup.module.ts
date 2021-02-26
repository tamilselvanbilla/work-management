import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SetupModule { }
