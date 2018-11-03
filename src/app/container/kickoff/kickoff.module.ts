import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KickoffComponent } from './kickoff.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../../component/kickoff/clients/clients.component';
import { RolesComponent } from '../../component/kickoff/roles/roles.component';
import { ServicesComponent } from '../../component/kickoff/services/services.component';
import { ResourcesComponent } from '../../component/kickoff/resources/resources.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'resources', component: ResourcesComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    KickoffComponent,
    ClientsComponent,
    RolesComponent,
    ServicesComponent,
    ResourcesComponent
  ]
})
export class KickoffModule {}
