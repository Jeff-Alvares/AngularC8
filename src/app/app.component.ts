import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    //Paginas agregadas 
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Clientes', url: '/clientes', icon: 'people' },
    { title: 'Users', url: '/usuarios', icon: 'person-circle' },
    { title: 'Students', url: '/alumnos', icon: 'school' },
    { title: 'Teachers', url: '/docentes', icon: 'man' },
    { title: 'Alert', url: '/alert', icon: 'warning' },
  ];

  constructor() {}
}
