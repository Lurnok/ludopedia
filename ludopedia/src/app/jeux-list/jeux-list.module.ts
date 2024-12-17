import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeuxListPageRoutingModule } from './jeux-list-routing.module';

import { JeuxListPage } from './jeux-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeuxListPageRoutingModule
  ],
  declarations: [JeuxListPage]
})
export class JeuxListPageModule {}
