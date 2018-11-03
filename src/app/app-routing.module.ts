import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';
import { NewEformComponent } from './component/new-eform/new-eform.component';
import { EFormComponent } from './container/e-form/e-form.component';

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
        path: 'kickoff',
        loadChildren: 'app/container/kickoff/kickoff.module#KickoffModule'
      }
    ]
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
