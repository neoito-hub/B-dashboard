import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';
import { EFormComponent } from './container/e-form/e-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'e-form',
    component: EFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
