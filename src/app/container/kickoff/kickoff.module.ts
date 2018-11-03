import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KickoffComponent } from './kickoff.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../../component/kickoff/clients/clients.component';
import { RolesComponent } from '../../component/kickoff/roles/roles.component';
import { ServicesComponent } from '../../component/kickoff/services/services.component';
import { ResourcesComponent } from '../../component/kickoff/resources/resources.component';
import { NewClientComponent } from '../../component/kickoff/clients/new-client/new-client.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'resources', component: ResourcesComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [
    KickoffComponent,
    ClientsComponent,
    RolesComponent,
    ServicesComponent,
    ResourcesComponent,
    NewClientComponent
  ],
  entryComponents: [NewClientComponent]
})
export class KickoffModule {}
