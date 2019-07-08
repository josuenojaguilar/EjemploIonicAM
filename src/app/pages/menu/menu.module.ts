import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/principal',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      
      { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' },
      { path: 'contactos', loadChildren: '../contactos/contactos.module#ContactosPageModule' },
      { path: 'principal', loadChildren: '../principal/principal.module#PrincipalPageModule' },
      { path: 'otra', loadChildren: '../otra/otra.module#OtraPageModule' }
    ]
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
