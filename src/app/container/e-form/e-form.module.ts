import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFormComponent } from './e-form.component';
import { EFormListComponent } from '../../component/e-form-list/e-form-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EFormComponent, EFormListComponent]
})
export class EFormModule {}
