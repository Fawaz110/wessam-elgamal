import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./Components/home/home').then(c => c.Home) },
    { path: 'blogs', loadComponent: () => import('./Components/blogs/blogs').then(c => c.Blogs) },
    { path: 'certificates', loadComponent: () => import('./Components/certificates/certificates').then(c => c.Certificates) },
    { path: 'experience', loadComponent: () => import('./Components/experience/experience').then(c => c.Experience) },
    // { path: 'keep-in-touch', loadComponent: () => import('./Components/keep-in-touch/keep-in-touch').then(c => c.KeepInTouch) },
    { path: '**', loadComponent: () => import('./Components/not-found/not-found').then(c => c.NotFound) },
];
