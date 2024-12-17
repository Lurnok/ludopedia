import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { JeuService } from 'src/app/jeu.service';
import { Jeu } from 'src/app/models/jeu.model';

@Component({
  selector: 'app-jeu-new',
  templateUrl: './jeu-new.page.html',
  styleUrls: ['./jeu-new.page.scss'],
})
export class JeuNewPage implements OnInit {

  public jeu! : Jeu;

  constructor(
    private Jeux : JeuService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.jeu = new Jeu();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau jeu enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/jeux']);
      }, 2000);
    });
  }

  add() {
    this.Jeux.saveNewJeu(this.jeu).then(() => {
      this.jeu = new Jeu();
      this.presentToast();
    })
  }
}
