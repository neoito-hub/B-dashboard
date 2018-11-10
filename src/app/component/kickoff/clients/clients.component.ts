import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NewClientComponent } from './new-client/new-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(public modalService: BsModalService) {}

  ngOnInit() {}

  addClieneModal() {
    // this.addGuestModalRef = this.modalService.show(EditGuestComponent);
    // const initialState = {
    //   list: [
    //     'Open a modal with component',
    //     'Pass your data',
    //     'Do something else',
    //     '...'
    //   ],
    //   title: 'Modal with component'
    // };
    this.bsModalRef = this.modalService.show(NewClientComponent);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
}
