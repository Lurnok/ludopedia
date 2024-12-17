import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeuNewPage } from './jeu-new.page';

const routes: Routes = [
  {
    path: '',
    component: JeuNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeuNewPageRoutingModule {}
