import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EFormListComponent } from './component/e-form-list/e-form-list.component';
import { NewEformComponent } from './component/new-eform/new-eform.component';

const eformRoutes: Routes = [
  {
    path: '',
    component: EFormListComponent
  }
  // {
  //   path: 'create-e-form',
  //   component: NewEformComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(eformRoutes)],
  exports: [RouterModule]
})
export class EFormRoutingModule {}
