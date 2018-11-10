import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  clientGroup: FormGroup;
  bsModalRef: BsModalRef;

  constructor(private fb: FormBuilder, public modalService: BsModalService) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.clientGroup = this.fb.group({
      projectName: [],
      clientName: [],
      service: [{ value: 1 }],
      resource: [{ value: 1 }],
      roles: [{ value: 1 }],
      dailyHours: [{ value: 1 }],
      hoursPerMonth: [],
      deliveryDate: [],
      pmTool: [],
      nextAction: [],
      responsiblePerson: []
    });
  }
}
