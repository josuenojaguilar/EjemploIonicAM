import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Principal',
      url: '/menu/principal',
      icon: 'home'
    },
    {
      title: 'Informacion Personal',
      children: [
        {
          title: 'Mi perfil',
          url: '/menu/perfil',
          icon: 'person'
        },
        {
          title: 'Mis contantos',
          url: '/menu/contactos',
          icon: 'contacts'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
