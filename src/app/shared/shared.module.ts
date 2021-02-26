import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterHeaderComponent } from '../outer-header/outer-header.component';



@NgModule({
  declarations: [OuterHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OuterHeaderComponent
  ],
})
export class SharedModule { }
