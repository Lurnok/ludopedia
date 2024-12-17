import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeuNewPageRoutingModule } from './jeu-new-routing.module';

import { JeuNewPage } from './jeu-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeuNewPageRoutingModule
  ],
  declarations: [JeuNewPage]
})
export class JeuNewPageModule {}
