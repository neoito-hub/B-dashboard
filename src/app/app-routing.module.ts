import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';

import { NewEformComponent } from './e-form/component/new-eform/new-eform.component';
import { EFormComponent } from './e-form/container/e-form.component';
import { RolesComponent } from './e-form/component/roles/roles.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'files',
        loadChildren: 'app/files/files.module#FilesModule'
      },
      {
        path: 'e-form',
        component: EFormComponent
      },
      {
        path: 'create-e-form',
        component: NewEformComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
