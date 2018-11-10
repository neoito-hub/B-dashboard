import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  clientGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.clientGroup = this.fb.group({
      project_name: ['', Validators.required],
      client_name: ['', Validators.required],
      services_hired: [[]],
      roles_hired: [[]],
      resources_allotted: [[]],
      daily_working_hours: this.fb.group({
        from: [''],
        to: ['']
      }),
      hours_per_month: [],
      delivery_date: [],
      pm_tool_used: [],
      responsible_person: this.fb.group({
        person: [''],
        action: ['']
      })
    });
  }

  // initGroup(value?: any) {
  //   return this.fb.group({
  //     person: [''],
  //     action: ['']
  //   });
  // }
  addClient(form) {
    console.log(form, 'FOrm');

    if (form.valid) {
      this.clientService.addClient(form.value).subscribe(val => {
        console.log(val);
      });
      this.bsModalRef.hide();
    } else {
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
