import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KickoffComponent } from './kickoff.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../../component/clients/clients.component';

const routes: Routes = [
  { path: '', component: KickoffComponent },
  { path: 'clients', component: ClientsComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [KickoffComponent, ClientsComponent]
})
export class KickoffModule {}
