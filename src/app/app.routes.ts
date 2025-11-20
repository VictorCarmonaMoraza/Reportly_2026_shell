import { Routes } from '@angular/router';
import { HomePage } from './layout/home-page/home-page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    title: 'Home',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('dashboard/Module').then(m => m.RemoteEntryModule),
    title: 'Microfront1',
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('reports/Module').then(m => m.RemoteEntryModule),
    title: 'Microfront2',
  },

  {
    path: '**',
    redirectTo: 'home',
  }
];
