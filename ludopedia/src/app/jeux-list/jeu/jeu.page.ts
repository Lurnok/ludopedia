import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { JeuService } from 'src/app/jeu.service';
import { Jeu } from 'src/app/models/jeu.model';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.page.html',
  styleUrls: ['./jeu.page.scss'],
})
export class JeuPage implements OnInit {
  modif: boolean = false;
  jeu : any = null;

  constructor(
    private alertCtrl : AlertController,
    private route : ActivatedRoute,
    private Jeux : JeuService,
    private toastController : ToastController,
    private router : Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Jeux.get(id).subscribe((value: any) => {
      this.jeu = value;
    })
  }

  async setModif() {
    if(!this.modif){
      const alert = await this.alertCtrl.create({
        header: 'Etes vous sûr de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          },{
            text: "Confirmer",
            handler: () => { this.modif = !this.modif }
          }
        ]
      });

      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast(){
    const toast = this.toastController.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Jeux.update(this.jeu).then(() => {
      this.presentToast();
      this.modif = false;
    })
  }

  async onDelete(id: any) {
    const alert = await this.alertCtrl.create({
      header: 'Etes vous sûr de vouloir supprimer ?',
      subHeader: 'Cette action est irréversible',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },{
          text: "Confirmer",
          handler: () => {
            this.Jeux.delete(id);
            this.router.navigate(['/jeux'])
          }
        }
      ]
    });

    await alert.present();
    
  }
}
