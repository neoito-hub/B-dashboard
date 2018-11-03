import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';
import { NewEformComponent } from './component/new-eform/new-eform.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'e-form',
    component: NewEformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
