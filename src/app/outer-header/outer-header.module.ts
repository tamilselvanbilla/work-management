import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterHeaderComponent } from './outer-header.component';



@NgModule({
  declarations: [OuterHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OuterHeaderComponent
  ]
})
export class OuterHeaderModule { }
