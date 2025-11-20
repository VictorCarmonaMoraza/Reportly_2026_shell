import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  router = inject(Router);

  // Filtrar las rutas para excluir la ruta comodín '**'
  routes = routes.map(route => ({
    path: route.path,
    title: `${route.title ?? 'Home'}`
  })).filter(route => route.path !== '**');
}
