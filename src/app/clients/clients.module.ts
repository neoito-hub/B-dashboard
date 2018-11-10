import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { ClientsListService } from './services/clients-list.service';

@NgModule({
  imports: [CommonModule, ClientsRoutingModule, HttpClientModule],
  declarations: [ClientListComponent],
  providers: [ClientsListService]
})
export class ClientsModule {}
