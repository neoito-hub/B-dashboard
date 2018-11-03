import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
  // {
  //   path: 'e-form',
  //   component: NewEFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
