import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';


interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[]=[
    { 
      icon: 'people-outline',
      name: 'Listado de Clientes',
      redirectTo: '/clientes'
    },
    { 
      icon: 'book-outline',
      name: 'Listado de Alumnos',
      redirectTo: '/alumnos'
    },
    { 
      icon: 'people-circle-outline',
      name: 'Listado de Usuarios',
      redirectTo: '/usuarios'
    },
    { 
      icon: 'school-outline',
      name: 'Listado de Docentes',
      redirectTo: '/docentes'
    },
    { 
      icon: 'person',
      name: 'Avatar',
      redirectTo: '/avatar'
    }, 
    { 
      icon:'heart-outline', 
      name:'Favoritos', 
      redirectTo: '/favoritos', 
 
    } 
  ];

  constructor(){}
  
  ngOnInit() {
  }

}
