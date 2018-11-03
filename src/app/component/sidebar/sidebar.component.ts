import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public showMenu = false;
  @Input()
  menu;
  constructor() {}

  // side nav open
  sidenav() {
    this.showMenu = !this.showMenu;
    document.getElementById('s-nav').classList.toggle('sideNavExpand');
    if (this.showMenu === false) {
      document.getElementById('s-nav').style.width = '54px';
    } else {
      document.getElementById('s-nav').style.width = '200px';
    }
  } // side nav open end

  ngOnInit() {}
}
