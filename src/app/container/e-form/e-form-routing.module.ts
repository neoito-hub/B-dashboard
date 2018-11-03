import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EFormListComponent } from '../../component/e-form-list/e-form-list.component';

const eformRoutes: Routes = [
  {
    path: '',
    component: EFormListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(eformRoutes)],
  exports: [RouterModule]
})
export class EFormRoutingModule {}
