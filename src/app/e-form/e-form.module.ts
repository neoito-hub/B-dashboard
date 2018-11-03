import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFormRoutingModule } from './e-form-routing.module';
import { EFormListComponent } from './component/e-form-list/e-form-list.component';
import { NewEformComponent } from './component/new-eform/new-eform.component';
import { EFormComponent } from './container/e-form.component';

@NgModule({
  imports: [CommonModule, EFormRoutingModule],
  declarations: [EFormComponent, EFormListComponent, NewEformComponent]
})
export class EFormModule {}
