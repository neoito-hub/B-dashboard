import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  addRole: FormGroup;
  constructor() {}

  ngOnInit() {}
  addroles() {
    this.addRole = new FormGroup({
      name: new FormControl(),
      responsibilities: new FormControl()
    });
  }
}
