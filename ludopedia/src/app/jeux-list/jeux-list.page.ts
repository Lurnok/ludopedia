import { Component, OnInit } from '@angular/core';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-jeux-list',
  templateUrl: './jeux-list.page.html',
  styleUrls: ['./jeux-list.page.scss'],
})
export class JeuxListPage implements OnInit {

  jeux: any[] = [];

  constructor(
    private Jeux : JeuService
  ) { }

  ngOnInit() {
    this.Jeux.getAll().subscribe((data : any[]) => {
      this.jeux = data;
    })
  }

}
