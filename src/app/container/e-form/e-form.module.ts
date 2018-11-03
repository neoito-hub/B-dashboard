import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFormComponent } from './e-form.component';
import { EFormListComponent } from '../../component/e-form-list/e-form-list.component';
import { EFormRoutingModule } from './e-form-routing.module';

@NgModule({
  imports: [CommonModule, EFormRoutingModule],
  declarations: [EFormComponent, EFormListComponent]
})
export class EFormModule {}
