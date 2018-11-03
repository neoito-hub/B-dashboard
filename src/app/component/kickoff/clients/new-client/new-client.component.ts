import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  clientGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientGroup = this.fb.group({
      projectName: []
    });
  }

  ngOnInit() {}
}
