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

  async errorToast(missingFields : Array<string>){
    let message = "Les champs : \n";
    missingFields.forEach(champs => {
      message += champs + ", ";
    })
    message += ' sont vides ou incorrects';

    const toast = this.toastCtrl.create({
      message : message,
      duration : 2000,
      color: 'danger'
    });
    (await toast).present();
  }

  add() {
    // let missingFields = new Array<string>();

    // if(this.jeu.age <= 0)
    //   missingFields.push('age');

    // if(this.jeu.description = "")
    //   missingFields.push('description');

    // if(this.jeu.duration <= 0)
    //   missingFields.push('duree');

    // if(this.jeu.imageurl = "")
    //   missingFields.push('image');

    // if(this.jeu.nbplayers <= 0)
    //   missingFields.push('nombre de joueurs')

    // if(this.jeu.price <= 0)
    //   missingFields.push('prix')
    
    // if(this.jeu.title = "")
    //   missingFields.push("titre");

    // if(missingFields.length > 0){
    //   this.errorToast(missingFields);
    // }else{
      this.Jeux.saveNewJeu(this.jeu).then(() => {
        this.jeu = new Jeu();
        this.presentToast();
      })
    //}
    
  }
}
