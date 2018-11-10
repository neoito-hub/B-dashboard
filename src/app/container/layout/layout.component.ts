import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menu = {
    theme: '', // background color
    logo: '',
    items: [
      {
        id: 1,
        menu: 'Dashboard',
        icon: 'card_travel',
        url: '#'
      },
      {
        id: 2,
        menu: 'E Form',
        icon: 'folder',
        submenu: [
          { name: 'New e-form', url: '/create-e-form' },
          { name: 'E-Form list', url: '/e-form' },
          { name: 'E-Form roles', url: '/roles' }
        ],
        url: '#'
      },
      {
        id: 3,
        menu: 'Kick Off',
        icon: 'group',
        url: '#'
      },
      {
        id: 4,
        menu: 'Files',
        icon: 'folder',
        url: '/files'
      }
    ],
    breadcrumbs: [
      // breadcrumbs
      {
        id: 1,
        menu: 'b1',
        url: '#',
        icon: ''
      },
      {
        id: 2,
        menu: 'b2',
        url: '#'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
