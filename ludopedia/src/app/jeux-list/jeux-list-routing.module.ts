import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeuxListPage } from './jeux-list.page';

const routes: Routes = [
  {
    path: '',
    component: JeuxListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./jeu-new/jeu-new.module').then( m => m.JeuNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./jeu/jeu.module').then( m => m.JeuPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeuxListPageRoutingModule {}
