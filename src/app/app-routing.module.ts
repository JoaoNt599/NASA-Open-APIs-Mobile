import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apod',
    loadChildren: () => import('./apod/apod.module').then( m => m.ApodPageModule)
  },
  {
    path: 'asteroids',
    loadChildren: () => import('./asteroids/asteroids.module').then( m => m.AsteroidsPageModule)
  },
  {
    path: 'donki',
    loadChildren: () => import('./donki/donki.module').then( m => m.DonkiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
