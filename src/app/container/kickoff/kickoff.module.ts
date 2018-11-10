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
import { ModalModule } from 'ngx-bootstrap';
import { ClientService } from '../../component/kickoff/clients/client.service';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'resources', component: ResourcesComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FileUploadModule
  ],
  declarations: [
    KickoffComponent,
    ClientsComponent,
    RolesComponent,
    ServicesComponent,
    ResourcesComponent,
    NewClientComponent
  ],
  providers: [ClientService],
  entryComponents: [NewClientComponent]
})
export class KickoffModule {}
