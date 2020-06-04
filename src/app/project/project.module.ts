import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCorComponent } from './test-cor/test-cor.component';
import { TestDfrComponent } from './test-dfr/test-dfr.component';
import { TestRfiViewComponent } from './test-rfi-view/test-rfi-view.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TestCorComponent,
    TestDfrComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProjectModule { }
