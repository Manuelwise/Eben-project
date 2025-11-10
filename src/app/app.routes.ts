import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page/home-page').then(m => m.HomePageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact-page/contact-page').then(m => m.ContactPageComponent)
  },
  {
    path: 'submit-talk',
    loadComponent: () => import('./features/submit-talk/submit-talk-page/submit-talk-page').then(m => m.SubmitTalkPageComponent)
  }
];
