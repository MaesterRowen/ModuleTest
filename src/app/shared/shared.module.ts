import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRfiViewComponent } from '../project/test-rfi-view/test-rfi-view.component';



@NgModule({
  declarations: [
    TestRfiViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestRfiViewComponent
  ]
})
export class SharedModule { }
