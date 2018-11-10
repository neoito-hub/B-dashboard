import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';

import { NewEformComponent } from './e-form/component/new-eform/new-eform.component';
import { EFormComponent } from './e-form/container/e-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'clients',
        loadChildren: 'app/clients/clients.module#ClientsModule'
      },
      {
        path: 'e-form',
        component: EFormComponent
      },
      {
        path: 'create-e-form',
        component: NewEformComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
