import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewClientComponent } from './new-client/new-client.component';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any;
  bsModalRef: BsModalRef;
  constructor(
    public modalService: BsModalService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.viewClients();
  }

  viewClients() {
    this.clientService.allClients().subscribe(data => {
      this.clients = data;
      console.log(this.clients.data, 'List Data');
    });
  }

  addClieneModal() {
    this.bsModalRef = this.modalService.show(NewClientComponent);
  }
}
