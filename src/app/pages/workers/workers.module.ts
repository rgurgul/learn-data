import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers/workers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WorkersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WorkersComponent }
    ])
  ]
})
export class WorkersModule { }
