import { Component, OnInit, Input } from '@angular/core';
@Input()
@Component({
  selector: 'app-new-eform',
  templateUrl: './new-eform.component.html',
  styleUrls: ['./new-eform.component.css']
})
export class NewEformComponent implements OnInit {
  constructor() {}
  tab: number = 0;
  
    setTab(num: number) {
      this.tab = num;
    }
  
    isSelected(num: number) {
      return this.tab === num;
    }
  ngOnInit() {}
}
