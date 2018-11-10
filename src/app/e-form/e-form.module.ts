import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFormRoutingModule } from './e-form-routing.module';
import { EFormListComponent } from './component/e-form-list/e-form-list.component';
import { NewEformComponent } from './component/new-eform/new-eform.component';
import { EFormComponent } from './container/e-form.component';
import { ImageUploadComponent } from './component/new-eform/image-upload/image-upload.component';
import { ProposalComponent } from './component/new-eform/proposal/proposal.component';
import { RolesComponent } from './component/roles/roles.component';

@NgModule({
  imports: [CommonModule, EFormRoutingModule],
  declarations: [
    EFormComponent,
    EFormListComponent,
    NewEformComponent,
    ImageUploadComponent,
    ProposalComponent,
    RolesComponent
  ],
  providers: []
})
export class EFormModule {}
